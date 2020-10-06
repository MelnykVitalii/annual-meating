import { createApp } from 'vue'
import VueAgile from 'vue-agile'
import App from './App.vue'
import router from './routers'
import style from './assets/style/index.css'

createApp(App).use(style).use(router).use(VueAgile).mount('#app')
