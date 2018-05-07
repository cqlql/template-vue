import getUrlSearch from '@/modules/corejs/url/get-url-search'
// import searchString from '@/modules/corejs/url/search-string'
function searchString2 (obj) {
  let data = ''
  fn(obj)
  return data.substr(1)
  function fn (obj, name) {
    Object.keys(obj).sort().forEach(key => {
      let val = obj[key]
      let newName = name ? name + '[' + key + ']' : key
      if (val instanceof Array || val instanceof Object) {
        fn(val, newName)
      } else {
        data += '&' + newName + '=' + encodeURIComponent(val)
      }
    })
  }
}
function jsonStringify (obj) {
  function sort (obj) {
    if (obj instanceof Array) {
      return obj
    }
    var newObj = {}

    Object.keys(obj).sort().forEach(function (key) {
      var o = obj[key]
      if (o instanceof Object) {
        o = sort(o)
      }
      newObj[key] = o
    })
    return newObj
  }
  return JSON.stringify(sort(obj))
}
describe('url', function () {
  it('getUrlSearch', function () {
    let v1 = getUrlSearch('name', '?name=123')
    let v2 = getUrlSearch('name2', '?name=123')
    expect(v1).to.equal('123')
    expect(v2).to.be.null
  })
  it('searchString', function () {
    console.log(
      jsonStringify({
        student: 'asdf',
        class: 'ffff',
        items: [
          { a5: 11 },
          { a2: 2 },
          { a3: 3 }
        ],

        teahcer: 'dfdd'
      })
    )
  })
})
