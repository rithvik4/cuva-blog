import { mkdir, readFile, writeFile } from "fs/promises"
import { dirname, join } from "path"

type GitHubStorageConfig = {
  owner: string
  repo: string
  branch: string
  token: string
}

const IS_SERVER_RUNTIME = Boolean(
  process.env.VERCEL || process.env.AWS_EXECUTION_ENV || process.env.AWS_REGION || process.env.LAMBDA_TASK_ROOT,
)

function getGitHubStorageConfig(): GitHubStorageConfig | null {
  const repoSlug = process.env.VERCEL_GIT_REPO_SLUG || process.env.GITHUB_REPOSITORY || ""
  const repoOwner = process.env.VERCEL_GIT_REPO_OWNER || repoSlug.split("/")[0] || ""
  const repoName = repoSlug.includes("/") ? repoSlug.split("/")[1] : repoSlug
  const branch = process.env.VERCEL_GIT_COMMIT_REF || process.env.GITHUB_BRANCH || "main"
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_API_TOKEN || ""

  if (!repoOwner || !repoName || !token) {
    return null
  }

  return {
    owner: repoOwner,
    repo: repoName,
    branch,
    token,
  }
}

function normalizeRepoPath(filePath: string) {
  return filePath.replace(/^\.?[\\/]+/, "").replace(/\\/g, "/")
}

function localAbsolutePath(filePath: string) {
  return join(process.cwd(), normalizeRepoPath(filePath))
}

async function readLocalJsonText(filePath: string, seedPath?: string) {
  const absolutePath = localAbsolutePath(filePath)

  try {
    return await readFile(absolutePath, "utf8")
  } catch {
    if (seedPath) {
      try {
        return await readFile(localAbsolutePath(seedPath), "utf8")
      } catch {
        // ignore
      }
    }

    return "[]\n"
  }
}

async function writeLocalJsonText(filePath: string, content: string) {
  const absolutePath = localAbsolutePath(filePath)
  await mkdir(dirname(absolutePath), { recursive: true })
  await writeFile(absolutePath, content, "utf8")
}

async function readGitHubJsonText(filePath: string, seedPath?: string) {
  const config = getGitHubStorageConfig()

  if (!config) {
    return null
  }

  const relativePath = normalizeRepoPath(filePath)
  const url = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/${relativePath}?ref=${encodeURIComponent(config.branch)}`

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (response.status === 404) {
    if (seedPath) {
      return await readLocalJsonText(seedPath)
    }

    return "[]\n"
  }

  if (!response.ok) {
    throw new Error(`Failed to read ${relativePath} from GitHub (${response.status})`)
  }

  const data = await response.json() as { content?: string }

  if (!data.content) {
    return "[]\n"
  }

  return Buffer.from(data.content.replace(/\n/g, ""), "base64").toString("utf8")
}

async function writeGitHubJsonText(filePath: string, content: string) {
  const config = getGitHubStorageConfig()

  if (!config) {
    return false
  }

  const relativePath = normalizeRepoPath(filePath)
  const apiUrl = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/${relativePath}`

  let sha: string | undefined
  const readResponse = await fetch(`${apiUrl}?ref=${encodeURIComponent(config.branch)}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })

  if (readResponse.ok) {
    const current = await readResponse.json() as { sha?: string }
    sha = current.sha
  }

  const writeResponse = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `Update ${relativePath}`,
      content: Buffer.from(content, "utf8").toString("base64"),
      branch: config.branch,
      ...(sha ? { sha } : {}),
    }),
  })

  if (!writeResponse.ok) {
    const responseText = await writeResponse.text()
    throw new Error(`Failed to write ${relativePath} to GitHub (${writeResponse.status}): ${responseText}`)
  }

  return true
}

export async function readJsonText(filePath: string, seedPath?: string) {
  const gitHubText = await readGitHubJsonText(filePath, seedPath)

  if (gitHubText !== null) {
    return gitHubText
  }

  if (IS_SERVER_RUNTIME) {
    throw new Error("GitHub-backed JSON storage is not configured on the server. Set GITHUB_TOKEN with repo contents write access.")
  }

  return readLocalJsonText(filePath, seedPath)
}

export async function writeJsonText(filePath: string, content: string) {
  const wroteToGitHub = await writeGitHubJsonText(filePath, content)

  if (wroteToGitHub) {
    return
  }

  if (IS_SERVER_RUNTIME) {
    throw new Error("Refusing to write JSON to local server storage. Configure GITHUB_TOKEN so Vercel writes to repository JSON files.")
  }

  await writeLocalJsonText(filePath, content)
}
