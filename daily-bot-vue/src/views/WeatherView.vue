<script setup lang="ts">
import { ref, computed } from 'vue'
import { NCard, NTag, NButton, NSpin, useMessage } from 'naive-ui'
import axios from 'axios'
import { useCredStore } from '@/stores/credStore'

const credStore = useCredStore()
const message = useMessage()

const city = computed(() => credStore.getCred('WEATHER_CITY') || 'Beijing')

const loading = ref(false)
const weatherData = ref<any>(null)
const error = ref('')

// WMO Weather Code Mapping
const wmoMap: Record<number, { desc: string; icon: string }> = {
  0: { desc: '晴朗', icon: '☀️' },
  1: { desc: '大部晴朗', icon: '🌤️' },
  2: { desc: '多云', icon: '⛅' },
  3: { desc: '阴天', icon: '☁️' },
  45: { desc: '雾', icon: '🌫️' },
  48: { desc: '雾凇', icon: '🌫️' },
  51: { desc: '小毛毛雨', icon: '🌦️' },
  53: { desc: '中毛毛雨', icon: '🌦️' },
  55: { desc: '大毛毛雨', icon: '🌧️' },
  56: { desc: '冻毛毛雨', icon: '🌧️' },
  57: { desc: '冻毛毛雨', icon: '🌧️' },
  61: { desc: '小雨', icon: '🌧️' },
  63: { desc: '中雨', icon: '🌧️' },
  65: { desc: '大雨', icon: '🌧️' },
  66: { desc: '冻雨', icon: '🌧️' },
  67: { desc: '冻雨', icon: '🌧️' },
  71: { desc: '小雪', icon: '🌨️' },
  73: { desc: '中雪', icon: '🌨️' },
  75: { desc: '大雪', icon: '❄️' },
  77: { desc: '雪粒', icon: '❄️' },
  80: { desc: '阵雨', icon: '🌦️' },
  81: { desc: '中阵雨', icon: '🌧️' },
  82: { desc: '大阵雨', icon: '🌧️' },
  85: { desc: '小雪阵', icon: '🌨️' },
  86: { desc: '大雪阵', icon: '❄️' },
  95: { desc: '雷暴', icon: '⛈️' },
  96: { desc: '雷暴伴小冰雹', icon: '⛈️' },
  99: { desc: '雷暴伴大冰雹', icon: '⛈️' },
}

const weatherInfo = computed(() => {
  if (!weatherData.value) return null
  const code = weatherData.value.current.weather_code
  const wmo = wmoMap[code] || { desc: '未知', icon: '🌈' }
  return {
    icon: wmo.icon,
    desc: wmo.desc,
    temp: Math.round(weatherData.value.current.temperature_2m),
    feelsLike: Math.round(weatherData.value.current.apparent_temperature),
    humidity: weatherData.value.current.relative_humidity_2m,
    windSpeed: weatherData.value.current.wind_speed_10m,
  }
})

async function fetchWeather() {
  loading.value = true
  error.value = ''
  try {
    // Geocode city to lat/lon
    const geoRes = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
      params: { name: city.value, count: 1, language: 'zh' },
    })
    if (!geoRes.data.results?.length) {
      error.value = '未找到城市'
      return
    }
    const { latitude, longitude, name } = geoRes.data.results[0]
    const weatherRes = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
        timezone: 'Asia/Shanghai',
      },
    })
    weatherData.value = { ...weatherRes.data, cityName: name }
    message.success(`已获取 ${name} 天气`)
  } catch (e: any) {
    error.value = e.message || '获取天气失败'
    message.error(error.value)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="weather-view">
    <h2 class="page-title">🌤️ 天气预报</h2>

    <!-- City Config -->
    <NCard title="城市配置" class="config-card">
      <div class="config-row">
        <div class="config-item">
          <span class="config-label">当前城市</span>
          <NTag type="success" size="small">{{ city }}</NTag>
        </div>
        <NButton type="primary" :loading="loading" @click="fetchWeather" size="small">
          获取天气
        </NButton>
      </div>
    </NCard>

    <!-- Weather Display -->
    <NCard v-if="weatherInfo" class="weather-main-card">
      <div class="weather-hero">
        <span class="weather-icon">{{ weatherInfo.icon }}</span>
        <span class="weather-temp">{{ weatherInfo.temp }}°C</span>
        <span class="weather-desc">{{ weatherInfo.desc }}</span>
        <span class="weather-city">{{ weatherData?.cityName || city }}</span>
      </div>
    </NCard>

    <!-- Detail Cards -->
    <div v-if="weatherInfo" class="weather-detail-grid">
      <NCard size="small" class="detail-card">
        <div class="detail-item">
          <span class="detail-icon">🌡️</span>
          <div class="detail-info">
            <span class="detail-label">体感温度</span>
            <span class="detail-value">{{ weatherInfo.feelsLike }}°C</span>
          </div>
        </div>
      </NCard>
      <NCard size="small" class="detail-card">
        <div class="detail-item">
          <span class="detail-icon">💧</span>
          <div class="detail-info">
            <span class="detail-label">湿度</span>
            <span class="detail-value">{{ weatherInfo.humidity }}%</span>
          </div>
        </div>
      </NCard>
      <NCard size="small" class="detail-card">
        <div class="detail-item">
          <span class="detail-icon">💨</span>
          <div class="detail-info">
            <span class="detail-label">风速</span>
            <span class="detail-value">{{ weatherInfo.windSpeed }} km/h</span>
          </div>
        </div>
      </NCard>
    </div>

    <NSpin :show="loading" />
    <div v-if="error" class="error-hint">{{ error }}</div>
  </div>
</template>

<style scoped>
.weather-view {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 20px;
}
.config-card {
  border: 1px solid var(--primary) !important;
  border-left: 4px solid var(--primary) !important;
}
.config-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.config-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.config-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* Weather Main */
.weather-main-card {
  text-align: center;
}
.weather-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
}
.weather-icon {
  font-size: 5rem;
  line-height: 1;
}
.weather-temp {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}
.weather-desc {
  font-size: 1.2rem;
  color: var(--text-secondary);
}
.weather-city {
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* Detail Grid */
.weather-detail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.detail-card {
  cursor: default;
}
.detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.detail-icon {
  font-size: 1.8rem;
}
.detail-info {
  display: flex;
  flex-direction: column;
}
.detail-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.detail-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
}
.error-hint {
  text-align: center;
  color: var(--danger);
  font-size: 0.9rem;
}

@media (max-width: 500px) {
  .weather-detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>