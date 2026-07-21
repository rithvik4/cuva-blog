const DEFAULT_ADMIN_USERNAME = "admin"
const DEFAULT_ADMIN_PASSWORD = "admin123"

export function getNonEmptyEnv(name: string) {
  const value = process.env[name]
  const trimmed = typeof value === "string" ? value.trim() : ""
  return trimmed || undefined
}

export function getAdminUsername() {
  return getNonEmptyEnv("ADMIN_USERNAME") || DEFAULT_ADMIN_USERNAME
}

export function getAdminPassword() {
  return getNonEmptyEnv("ADMIN_PASSWORD") || DEFAULT_ADMIN_PASSWORD
}

export function getAdminSessionSecret() {
  return getNonEmptyEnv("ADMIN_SESSION_SECRET") || getAdminPassword()
}