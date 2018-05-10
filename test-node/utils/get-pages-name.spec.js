const getPagesName = require('../../build/get-pages-name')

it('get-pages-name.spec', function () {
  expect(getPagesName()[2]).toBe('hello3')
})
