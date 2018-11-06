/**
 * 外链 script 增加
 * Created by cql on 2017/3/31.
 * */

// let PromiseSimple = window.Promise

// if (!PromiseSimple) {
//   PromiseSimple = function (init) {
//     init(data => this.resolve(data), error => this.reject(error))
//     this.successExec = () => { }
//     this.errorExec = () => { }
//   }
//   PromiseSimple.prototype.resolve = function (data) {
//     this.successExec(data)
//   }
//   PromiseSimple.prototype.reject = function (error) {
//     this.errorExec(error)
//   }
//   PromiseSimple.prototype.then = function (successExec) {
//     this.successExec = successExec
//     return this
//   }
//   PromiseSimple.prototype.catch = function (errorExec) {
//     this.errorExec = errorExec
//     return this
//   }
// }

export default function scriptLoad ({ src, success = () => { }, error = () => { }, complete = () => { }, charset = 'utf-8' }) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.charset = charset
  script.src = src
  if ('onload' in script) {
    script.onload = function () {
      success()
      complete()
      // script.remove()
    }
    script.onerror = function () {
      error(new Error('js 加载失败'))
      complete()
      // script.remove()
    }
  } else { // ie 情况
    script.attachEvent('onreadystatechange', function () {
      if (script.readyState === 'complete' || script.readyState === 'loaded') {
        success()
        complete()
      }
    })
  }
  (document.head || document.body).appendChild(script)
}

// export default function (src, { charset } = {}) {
//   return new PromiseSimple(function (resolve, reject) {
//     scriptLoad({
//       src,
//       charset,
//       success: resolve,
//       error: reject
//     })
//   })
// }
