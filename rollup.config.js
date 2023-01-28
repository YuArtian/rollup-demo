import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


const common_plugins = [
  commonjs(),
  resolve(),
  babel({
    // babelHelpers: 'bundled',
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
  }),
]

// const input = ['index.js', 'other.js']
const input = ['index.js']

export default [
  {
    input,
    output: {
      dir: 'dist/es',
      format: 'es'
    },
    plugins: [
      ...common_plugins
    ]
  },
  {
    input,
    output: {
      dir: 'dist/cjs',
      format: 'cjs'
    },
    plugins: [
      ...common_plugins
    ]
  },
  {
    input,
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
    input,
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