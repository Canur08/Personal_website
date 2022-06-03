import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/font/fonts.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
