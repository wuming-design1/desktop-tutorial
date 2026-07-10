import { saveCredentialsBatch, saveCredential, getCredentials, deleteCredential, deletePlatformCredentials, getUserPlatforms } from '../models/credentialModel'

// 平台定义（与前端 PLATFORM_KEYS 对应）
export const PLATFORM_KEYS: Record<string, string[]> = {
  github: ['GITHUB_TOKEN', 'GITHUB_REPO'],
  feishu: ['FEISHU_APP_ID', 'FEISHU_APP_SECRET'],
  weather: ['WEATHER_CITY'],
  ai: ['AI_API_KEY', 'AI_BASE_URL', 'AI_MODEL'],
  webhook: ['FEISHU_WEBHOOK_URL'],
}

export function getCredentialsForUser(userId: string, platform?: string): Record<string, string> {
  return getCredentials(userId, platform)
}

export function saveCredentials(userId: string, platform: string, creds: Record<string, string>): void {
  saveCredentialsBatch(userId, platform, creds)
}

export function saveSingleCredential(userId: string, platform: string, key: string, value: string): void {
  saveCredential(userId, platform, key, value)
}

export function removeCredential(userId: string, platform: string, key: string): void {
  deleteCredential(userId, platform, key)
}

export function removePlatform(userId: string, platform: string): void {
  deletePlatformCredentials(userId, platform)
}

export function getPlatforms(userId: string): string[] {
  return getUserPlatforms(userId)
}

export function hasCredentials(userId: string, platform: string): boolean {
  const creds = getCredentials(userId, platform)
  const keys = PLATFORM_KEYS[platform]
  if (!keys) return false
  return keys.every(k => creds[k] && creds[k].trim())
}