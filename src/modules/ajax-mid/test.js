// 直接请求
import axios from 'axios'

// 正式环境
let server = 'http://112.74.135.145:8081'
// let tokenServer = 'http://192.168.1.240:1235/comm/v1/campustoken'
let token

// 开发环境
if (process.env.NODE_ENV !== 'production') {
  server = ''
  // tokenServer = '/comm/v1/campustoken'
  token = JSON.parse(`


  {"code":0,"message":"ok","result":{"token":"4a803edf-8752-4c38-aad9-e12a228614c3","uid":"466877","username":"校领导","role":2}}


  `).result.token
}

let axiosTest = {
  get (url, config) {
    if (process.env.NODE_ENV !== 'production') {
      config = config || {}
      config.headers = {'X-Sd-token': token}
    }
    return axios.get(server + url, config)
  },
  post (url, data) {
    let config
    if (process.env.NODE_ENV !== 'production') {
      config = config || {}
      config.headers = {'X-Sd-token': token}
    }
    // console.log(server + url)
    return axios.post(server + url, data, config)
  },
  delete (url, config) {
    if (process.env.NODE_ENV !== 'production') {
      config = config || {}
      config.headers = {'X-Sd-token': token}
    }
    return axios.delete(server + url, config)
  }

  // getToken () {
  //   return axios.post(tokenServer, {
  //     'campus_id': '5255421148254165520',
  //     'no': 'sd001',
  //     'password': '123456',
  //     'role': 2
  //   })
  // }
}

window.axiosTest = axiosTest

export default axiosTest
