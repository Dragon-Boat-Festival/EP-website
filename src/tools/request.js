import axios from 'axios'
axios.defaults.withCredentials = true

let http = 'http://67fa-120-230-126-126.ngrok.io/'

// 获取首页所有数据
export function getHomeData() {
  return axios.get(http + `v1/main/data`)
}
