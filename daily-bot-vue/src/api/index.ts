import axios, { type AxiosInstance, type AxiosError, type InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '@/stores/auth'

const MAX_RETRIES = 3
const RETRY_DELAY = 1000

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStore = useAuthStore()
    if (authStore.token && config.headers) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    const config = error.config as InternalAxiosRequestConfig & { _retryCount?: number }

    if (!config) {
      return Promise.reject(error)
    }

    config._retryCount = config._retryCount ?? 0

    const shouldRetry =
      config._retryCount < MAX_RETRIES &&
      (!error.response || error.response.status >= 500)

    if (shouldRetry) {
      config._retryCount++
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY * config._retryCount))
      return http(config)
    }

    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      authStore.clearAuth()
      window.location.hash = '#/login'
    }

    return Promise.reject(error)
  }
)

export default http