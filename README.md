> https://www.rollupjs.com/guide/command-line-reference
> https://zhuanlan.zhihu.com/p/147083132


>

配置 input, output
```json
{
  input: 'index.js',
  output: {
    dir: 'dist/es',
    format: 'es'
  },
}
```

format选项支持 `es`, `iife`, `cjs`, `umd`, `amd`, `system`, 默认为 `es`

2. babel
`yarn add @rollup/plugin-babel @babel/core -D`

// rollup.config.js
```js
import { babel } from '@rollup/plugin-babel';

export default [
  {
    input: 'index.js',
    output: {
      dir: 'dist/es',
      format: 'es'
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      })
    ]
  }
]
```

> babelHelpers 选项
>
> - bundled: 把所有用到的 helpers 打包进 bundle 里。比较常用的方式
> - 

这里有2种方式
1. 使用 `babelHelpers: bundled` + `@babel/preset-env` + polyfill
  安装
  `yarn add @babel/preset-env core-js -D`
  
  配置
  
  ```json
  {
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "usage",
              "corejs": 3
              // "targets": {
                // "ie": 10
                // "browsers": ["> 1%", "last 2 versions", "not dead", "not ie 11"]
                // "browsers": ["Chrome >= 50"]
              // }
            }
          ]
        ]
      }),
    ]
  }
  ```
  
  > useBuiltIns 选项
  >
  > > https://babeljs.io/docs/en/babel-preset-env#usebuiltins
  > >
  > > https://juejin.cn/post/6844904069866192910
  >
  > - false（默认）: 不对 polyfill 做操作。如果引入 `@babel/polyfill`，则无视配置的浏览器兼容，引入所有的 polyfill
  >
  > - entry: 根据浏览器兼容性引入需要的 polyfill
  >   需要在入口文件引入 `import '@babel/polyfill'`
  >   根据 `browserslist` 引入需要的 ployfill。需要指定 `corejs` 版本（可选 2，3），并安装。
  >
  > - usage：根据浏览器兼容性 和 代码中使用到的 api 来引入对应的 ployfill。实现了按需引入，这是最常用的配置。
  >   也需要配置 corejs 版本
  
  targets 一般用 `.browserslistrc` 代替
  
  presets 的配置也可以写在 `.babelrc` 里
  
  示例代码
  
  ```js
  const arr = [1, 2, 3];
  const res = arr.includes(1);
  console.log('res::', res)
  const arr2 = Array.from(arr)
  const foo = async function () {
    console.log('foo!')
  }
  const bar = () => {
    console.log('bar')
  }
  bar()
  foo()
  export { arr, foo, arr2, bar };
  ```
  
  输出为
  
  ```js
  //dist/es/index.js
  import 'core-js/modules/es.array.includes.js';
  import 'core-js/modules/es.array.from.js';
  import 'core-js/modules/es.string.iterator.js';
  
  function _regeneratorRuntime() {...}
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {...}
  function _asyncToGenerator(fn) {...}
  //...
  ```
  
  可见 `@babel/preset-env` 配置 `useBuiltIns`为 `"usage"` 之后，实现了按需引入
  
  但是这时控制台会有报错
  
  ```shell
  index.js → dist/es...
  (!) Unresolved dependencies
  https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
  core-js/modules/es.array.includes.js (imported by "index.js")
  core-js/modules/es.array.from.js (imported by "index.js")
  core-js/modules/es.string.iterator.js (imported by "index.js")
  ```
  
  这是因为 rollup 没有正确的找到引入模块的路径
  
  需要增加 `@rollup/plugin-node-resolve` 插件
  
  增加之后 报错消失，但是在 html 中引入时，又会报错 `Uncaught ReferenceError: require is not defined`
  
  原因是 resolve 插件将引入变成了
  
  ```js
  var $$1 = require('../internals/export');
  var $includes = require('../internals/array-includes').includes;
  var fails = require('../internals/fails');
  var addToUnscopables = require('../internals/add-to-unscopables');
  ```
  
  rollup 默认不支持 cjs 的 require 语法，所以还需要 `@rollup/plugin-commonjs` 插件
  
  最终配置
  
  ```js
  // rollup.config.js
  import resolve from '@rollup/plugin-node-resolve';
  import commonjs from '@rollup/plugin-commonjs';
  
  export default {
    input: 'index.js',
    output: {
      dir: 'dist/es',
      format: 'es'
    },
    plugins: [
      commonjs(),
      resolve(),
      babel({
        babelHelpers: 'bundled',
      	exclude: 'node_modules/**',
      })
    ],
  }
  ```
  
  ```shell
  # .browserslistrc
  # 设置为 ie 10 让效果明显一点
  ie 10
  ```
  
  ```json
  //.babelrc
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "corejs": 3
        }
      ]
    ]
  }
  ```

2. 第二种方式，使用 `babelHelpers: 'runtime'` + `@babel/plugin-transform-runtime` + `@babel/runtime`

   `yarn add @babel/plugin-transform-runtime @babel/runtime  -D`

3. 













