import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import WOW from 'wowjs'

const app = createApp(App)
app.config.globalProperties.$wow = WOW

app
  .use(store)
  .use(router)
  .use(animated)
  .mount('#app')
