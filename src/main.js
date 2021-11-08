import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import WOW from 'wowjs'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { Sunny, Moon } from '@element-plus/icons'

const app = createApp(App)

app.config.globalProperties.$wow = WOW

app
  .use(store)
  .use(router)
  .use(animated)
  .use(ElementPlus)
  .component('Sunny', Sunny)
  .component('Moon', Moon)
  .mount('#app')
