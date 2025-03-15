import { createApp } from 'vue'
import { configureApp } from './config.js'
import '@/utils/auto-update.js'
import { Directive } from '@/directives/index.js'
import App from './App.vue'
import router from './router'
import '@/theme.css'
import useResize from "v-resize-hx";

const app = createApp(App)
Directive(app)
app.use(router)
app.use(useResize)
app.mount('#app')



configureApp(app)
