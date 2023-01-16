export default [
  {
    input: 'index.js',
    output: {
      dir: 'dist/es',
      format: 'es'
    }
  },
  {
    input: 'index.js',
    output: {
      dir: 'dist/cjs',
      format: 'cjs'
    }
  },
  {
    input: 'index.js',
    output: {
      dir: 'dist/iife',
      format: 'iife',
      name: 'demo_iife' //是否有name是有区别的
    }
  },
  {
    input: 'index.js',
    output: {
      dir: 'dist/umd',
      format: 'umd',
      name: 'demo_umd'
    }
  },
]