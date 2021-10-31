/**
 * 封装能发ajax请求的函数 json格式转换为urlencode
 * 1. 解决了post请求携带参数的问题：默认是json格式，需要转换成urlencode格式。(使用请求拦截器进行操作)
 * 2. 让请求成功的结果不再是response，而是response.data 的数据
 * 3. 统一处理所有请求的异常错误
 */
import axios from 'axios';
import {ElMessage} from 'element-plus'

axios.defaults.withCredentials = true

// 添加请求拦截器：让post请求的请求体格式为urlencoded格式  a=1&b=2
// 发请求前进行拦截
axios.interceptors.request.use(function (config) {
    // 得到请求方式和请求体数据
    const {method, data} = config
    // 处理post请求，将data对象转换为query参数格式的字符串
    if (method.toLowerCase() === 'post' && typeof data === 'object') {
        console.log(data
        )
        // config.data = qs.stringify(data)
    }

    return config;
});


// 添加响应拦截器：让响应过来的数据进行处理
// 让请求成功的结果不再是response，而是response.data的数-据
// 在我们请求数据响应数据的回调函数之前
axios.interceptors.response.use(function (response) {
    return response.data // 这个返回的数据结果就会返回到我们请求响应的回调函数的结果
}, function (error) { // 统一处理所有请求异常错误
    ElMessage({
        message: `'请求出错' + ${error.message}`,
        type: 'error',
    })
    return new Promise(() => {
    })
})

export default axios
