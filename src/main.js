import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import style from './assets/style/index.css'

createApp(App).use(style).use(router).mount('#app')
