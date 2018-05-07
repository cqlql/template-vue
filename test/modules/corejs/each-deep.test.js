import {eachDeep} from '@/modules/corejs/each'
import { type } from 'os';
describe('eachDeep 深度对象遍历', function () {
  let obj = {
    js: {
      loader: 'babel-loader',
      include: [
        '/modules/corejs'
      ],
    },
    postcss: ['vue-style-loader', {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        alias: {
          "./@": '/modules/corejs'
        }
      }
    }, 'postcss-loader?sourceMap=true'],
  }

  let lastValue
  eachDeep(obj, function (value, key, elem) {
    if (key === 'sourceMap') {
      elem['sourceMap'] = false
    }
    lastValue = value
  })

  it('sourceMap 是否更改为false', function() {
    let v1 = obj.postcss[1].options.sourceMap
    expect(v1).to.be.false
  })

  it('测试最后一个值', function() {
    expect(lastValue).to.be.equal('postcss-loader?sourceMap=true')
  })
})

describe('beack 在 if 下，能跳出for么', function () {
  it('测试循环是否能用', function() {
    let i = 10
    for (; i--;) {
    }
    expect(i).to.be.equal(-1)
  })
  it('beack 跳出测试', function() {
    let i = 10
    for (; i--;) {
      if (1) {
        break
      }
    }
    expect(i).to.be.equal(9)
  })
})
