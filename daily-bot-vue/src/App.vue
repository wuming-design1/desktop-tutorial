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
import NProgress from 'nprogress'

const router = useRouter()
const { isDark } = useTheme()
const summaryStore = useSummaryStore()

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
  summaryStore.loadData()
})
</script>

<template>
  <NConfigProvider :theme="naiveTheme" :theme-overrides="themeOverrides">
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <div class="app-layout" :class="{ dark: isDark }">
              <AppHeader />
              <main class="app-main">
                <router-view v-slot="{ Component, route }">
                  <transition name="page" mode="out-in">
                    <component :is="Component" :key="route.path" />
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