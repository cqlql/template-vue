// 根据链接中文件名称跳转。file 协议情况

/* export default function (router) {
  // 取链接文件名
  let pagename = location.pathname.match(/([^/]+)\.html$/)
  pagename = pagename && pagename[1]
  console.log(pagename)

  if (pagename) {
    router.push({name: pagename})
  }
} */

export default function () {
  // 取链接文件名
  let pagename = location.pathname.match(/([^/]+)\.html$/)
  return pagename && pagename[1]
}
