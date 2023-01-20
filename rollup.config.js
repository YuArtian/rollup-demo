import { babel } from '@rollup/plugin-babel';

const common_plugins = [
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: [
      [
        "@babel/preset-env",
        {
          "modules": false,
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

export default [
  {
    input: 'index.js',
    output: {
      // dir: 'dist/es',
      file: 'index.js',
      entryFileNames: '[name]-[hash].js',
      format: 'es'
    },
    plugins: [
      ...common_plugins
    ]
  },
  {
    input: 'index.js',
    output: {
      dir: 'dist/cjs',
      format: 'cjs'
    },
    plugins: [
      ...common_plugins
    ]
  },
  {
    input: 'index.js',
    output: {
      dir: 'dist/iife',
      format: 'iife',
      name: 'demo_iife' //是否有name是有区别的
    },
    plugins: [
      ...common_plugins
    ]
  },
  {
    input: 'index.js',
    output: {
      dir: 'dist/umd',
      format: 'umd',
      name: 'demo_umd'
    },
    plugins: [
      ...common_plugins
    ]
  },
]