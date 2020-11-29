import { HTTP } from './ajax.js'

// 服务器域名
const url = '127.0.0.1'

// 微信授权登录
export const WxLogin = (params) => HTTP('wei/app/login', params)