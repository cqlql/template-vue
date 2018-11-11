
// 其他端
// import axiosApp from './app'
import axiosWeb from './web'
// console.log(window.axiosTest)
let axios = axiosWeb
if (process.env.NODE_ENV !== 'production') {
  axios = window.axiosTest
}
export default axios
