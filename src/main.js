import { createApp } from 'vue/dist/vue'
import App from './App.vue'
import router from './routers'
import style from './assets/style/main.css'

createApp(App).use(style).use(router).mount('#app')
