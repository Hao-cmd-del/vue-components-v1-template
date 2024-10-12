import { createApp } from 'vue'
import { configureApp } from './config.js'

import App from './App.vue'
import router from './router'
import '@/theme.css'
const app = createApp(App)
app.use(router)
app.mount('#app')


configureApp(app)
