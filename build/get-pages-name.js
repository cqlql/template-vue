const fs = require('fs')
const path = require('path')
function getPagesName () {
  let dirList = fs.readdirSync(path.resolve(__dirname, '../src/views'))
  const reg = /\.vue$/
  dirList = dirList.map(name => {
    return name.replace(reg, '')
  })
  return dirList
}

module.exports = getPagesName
