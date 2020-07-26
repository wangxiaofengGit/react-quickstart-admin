import axios from 'axios'
import {  message } from 'antd'
import { getToken } from './auth'
import Cookies from 'js-cookie'
import store  from '../store/index'

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

const service = axios.create({
    baseURL: process.env==='development'?'/api':'https://jsonplaceholder.typicode.com/',
    timeout: 15000
})

service.interceptors.request.use(
  config => {
    store.dispatch.loading.setLoading(true)
    if (Cookies.get('userInfo')) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    store.dispatch.loading.setLoading(false)
    message.error(error.message)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    store.dispatch.loading.setLoading(false)
    const { status } = response

    if (status !== 201) {
        message.error(codeMessage[status])
      if (status === 50008 || status === 50012 || status === 50014) {
          Cookies.remove('userInfo')
          Cookies.remove('selectMenusKey')
      }
      return Promise.reject(new Error(response.message || 'Error'))
    } else {
      return response.data
    }
  },
  error => {
    store.dispatch.loading.setLoading(false)
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
