/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建一个axios实例，通过该实例去发请求
const request = axios.create({
  baseURL: 'https://localhost:3000/'
})

// 导出请求方法
export default request