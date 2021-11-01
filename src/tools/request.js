import axios from './ajax'

axios.defaults.withCredentials = true

let http = 'http://b163-120-230-126-33.ngrok.io/'

// 获取首页所有数据
export function getHomeData() {
  return axios.get(http + `v1/main/data`)
}

/**
 * 获取 项目 或者 全球议题的 详情数据
 * @param type 0表示是项目（project）1表示环保议题
 * @param id
 * @param name 名称
 * @param types_id 议题id
 * @returns {AxiosPromise}
 */
export const getProjectOrTypesData = (data) => {
  return axios({
    method: 'post',
    url: `${http}v1/projectOrTypes/data`,
    data: data,
  })
}
