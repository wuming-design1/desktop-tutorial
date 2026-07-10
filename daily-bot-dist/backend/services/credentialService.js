import { saveCredentialsBatch, saveCredential, getCredentials, deleteCredential, deletePlatformCredentials, getUserPlatforms } from '../models/credentialModel';
// 平台定义（与前端 PLATFORM_KEYS 对应）
export const PLATFORM_KEYS = {
    github: ['GITHUB_TOKEN', 'GITHUB_REPO'],
    feishu: ['FEISHU_APP_ID', 'FEISHU_APP_SECRET'],
    weather: ['WEATHER_CITY'],
    ai: ['AI_API_KEY', 'AI_BASE_URL', 'AI_MODEL'],
    webhook: ['FEISHU_WEBHOOK_URL'],
};
export function getCredentialsForUser(userId, platform) {
    return getCredentials(userId, platform);
}
export function saveCredentials(userId, platform, creds) {
    saveCredentialsBatch(userId, platform, creds);
}
export function saveSingleCredential(userId, platform, key, value) {
    saveCredential(userId, platform, key, value);
}
export function removeCredential(userId, platform, key) {
    deleteCredential(userId, platform, key);
}
export function removePlatform(userId, platform) {
    deletePlatformCredentials(userId, platform);
}
export function getPlatforms(userId) {
    return getUserPlatforms(userId);
}
export function hasCredentials(userId, platform) {
    const creds = getCredentials(userId, platform);
    const keys = PLATFORM_KEYS[platform];
    if (!keys)
        return false;
    return keys.every(k => creds[k] && creds[k].trim());
}
//# sourceMappingURL=credentialService.js.map