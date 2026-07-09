<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NLoadingBarProvider,
  NDialogProvider,
  darkTheme,
} from 'naive-ui'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import SearchModal from '@/components/common/SearchModal.vue'
import LoginModal from '@/components/common/LoginModal.vue'
import { useTheme } from '@/composables/useTheme'
import { useKeyboard } from '@/composables/useKeyboard'
import { useSummaryStore } from '@/stores/summary'
import { useCredStore } from '@/stores/credStore'
import { useAuthStore } from '@/stores/auth'
import NProgress from 'nprogress'

const router = useRouter()
const route = useRoute()
const { isDark } = useTheme()
const summaryStore = useSummaryStore()
const credStore = useCredStore()
const authStore = useAuthStore()

const naiveTheme = computed(() => (isDark.value ? darkTheme : null))

const themeOverrides = {
  common: {
    primaryColor: '#6C5CE7',
    primaryColorHover: '#A29BFE',
    primaryColorPressed: '#4A3DBF',
    primaryColorSuppl: '#A29BFE',
  },
}

const loginModalRef = ref()
const isAuthPage = computed(() => route.meta.guest === true)

function openLogin() {
  loginModalRef.value?.open()
}

provide('openLogin', openLogin)

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

useKeyboard([
  {
    key: 'k',
    ctrl: true,
    handler: () => {
      // handled by SearchModal
    },
  },
])

onMounted(() => {
  if (authStore.isAuthenticated) {
    summaryStore.loadData()
    // 首次登录或未配置凭证时，自动弹出凭证管理
    if (!credStore.hasAnyCredential) {
      setTimeout(() => openLogin(), 800)
    }
  }
})
</script>

<template>
  <NConfigProvider :theme="naiveTheme" :theme-overrides="themeOverrides">
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <!-- 认证页面：无导航栏，纯净登录/注册 -->
            <div v-if="isAuthPage" class="app-auth-layout">
              <router-view v-slot="{ Component, route: r }">
                <transition name="page" mode="out-in">
                  <component :is="Component" :key="r.path" />
                </transition>
              </router-view>
            </div>

            <!-- 主应用布局 -->
            <div v-else class="app-layout" :class="{ dark: isDark }">
              <AppHeader />
              <main class="app-main">
                <router-view v-slot="{ Component, route: r }">
                  <transition name="page" mode="out-in">
                    <component :is="Component" :key="r.path" />
                  </transition>
                </router-view>
              </main>
              <AppFooter />
              <SearchModal />
              <LoginModal ref="loginModalRef" />
            </div>
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
.app-auth-layout {
  min-height: 100vh;
}

.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 40px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>