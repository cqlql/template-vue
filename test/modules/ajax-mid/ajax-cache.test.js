import ajaxTest from '@/modules/ajax-mid/test-karma.js'
import ajaxCache from '@/modules/ajax-mid/ajax-cache.js'

describe('@/modules/ajax-mid', function () {
  it('ajax-cache，get 测试', function(done) {
    // 制造假数据
    ajaxTest.set({
      '/schoolorg/v1/getCurrUserInfo' () {
        return {
          status: 200,
          result: {
            text: '正确的返回结果'
          },
          message: 'ok'
        }
      }
    })

    ajaxCache.get('/schoolorg/v1/getCurrUserInfo').then(data => {
      if (data) {
        expect(data).to.include.keys('text')
        expect(data._isCache).to.be.undefined
      }
      // 测试 是否用了缓存
      return ajaxCache.get('/schoolorg/v1/getCurrUserInfo')
    }).then(data => {
      if (data) {
        expect(data._isCache).to.be.true
      }

      // 清理缓存
      ajaxCache.clear('/schoolorg/v1/getCurrUserInfo')
      return ajaxCache.get('/schoolorg/v1/getCurrUserInfo')
    }).then(data => { // 没有缓存
      if (data) {
        expect(data._isCache).to.be.undefined
      }
      done()
    }).catch(function (err) {
      done(err)
    })
  })
})
