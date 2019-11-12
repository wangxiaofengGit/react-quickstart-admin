import axios from 'axios'
import {  message } from 'antd'
import store from '../store'
import { signOutAction } from '../actions/login'
import { getToken } from './auth'
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（请重新登录）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
// create an axios instance
const service = axios.create({
    baseURL: process.env==='development'?'/api':'https://jsonplaceholder.typicode.com/',
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (sessionStorage.getItem('userInfo')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const { status } = response

    // if the custom code is not 20000, it is judged as an error.
    if (status !== 201) {
        message.error(codeMessage[status])
      // 50008: Illegal token; 50012: Other clients logged ; 50014: Token expired;
      if (status === 50008 || status === 50012 || status === 50014) {
          // other network error
          store.dispatch(signOutAction())
      }
      return Promise.reject(new Error(response.message || 'Error'))
    } else {
      return response.data
    }
    
  },
  error => {
    console.log('err' + error) // for debug
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default service