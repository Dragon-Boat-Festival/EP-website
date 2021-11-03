import axios from './ajax'

axios.defaults.withCredentials = true

let http = 'http://127.0.0.1:7001/'

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

/**
 * 获取 文章 详情
 * @param news_id 新闻id
 * @returns {AxiosPromise}
 */
export const getNewsDetail = (news_id) => {
    return axios({
        method: 'post',
        url: `${http}v1/news/detail`,
        data: {
            news_id,
        },
    })
}
/**
 * 获取 最新消息页
 * @returns {AxiosPromise}
 */
export const getNewsMessage = () => {
    return axios({
        method: 'get',
        url: `${http}v1/new_message/date`,
    })
}

// 获取搜索返回结果
export const getSearchData = (data) => {
    return axios({
        method: 'post',
        url: `${http}v1/news/search`,
        data: data,
    })
}
