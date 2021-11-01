import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import WOW from 'wowjs'
import 'element-plus/dist/index.css'
import { ElLoading } from 'element-plus'

const app = createApp(App)

app.config.globalProperties.$wow = WOW

app
  .use(store)
  .use(router)
  .use(animated)
  .use(ElLoading)
  .mount('#app')
