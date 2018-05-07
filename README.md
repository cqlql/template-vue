

## css module 使用
webpack css modules

开启后，文件中的所有 className 将替换成变成唯一

**由文件划分模块**

文件 a.css 相同 className 替换后依然相同

文件 a.css 与 b.css 中 className 即使有相同，替换后不一样

**不转换**

```css
:global .cf { clear: both; }
```

默认 `:local`，即转换，可不指定

**webpack.config.js**

```js
{
  test: /\.css$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]'
      }
    }
  ]
}
```


### 20180501 ---- 新方式

main.js

```js
// 模块化导入
import '/main.css?module'
```

**webpack.config.js**

```js

```


## css 拆分
目前异步包中的 css 会单独生成一个对应的按需异步 css 文件， 如果是直接 import('style.css')，则会多出一个空的异步 js


**总结：**

异步包的 css 拆分会有各种冗余

同步包拆分可控，包括 vue 文件

异步 vue 文件中的 css 拆分还没法合并

**所以，尽量还是不拆分了**

