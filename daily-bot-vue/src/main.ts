import { createApp } from 'vue'
import { createPinia } from 'pinia'
import NProgress from 'nprogress'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 })
createApp(App).use(createPinia()).use(router).mount('#app')