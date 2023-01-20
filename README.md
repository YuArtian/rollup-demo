> https://www.rollupjs.com/guide/command-line-reference
> https://zhuanlan.zhihu.com/p/147083132
>

1.
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
yarn add @rollup/plugin-babel @babel/core -D

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

babelHelpers 选项
'bundled': 把所有用到的 helpers 打包进 bundle 里

这里有2种方式
1. 使用 @babel/preset-env + polyfill，在 preset-env 配置中设置 useBuiltIns: 'usage'
yarn add @babel/preset-env corejs -D