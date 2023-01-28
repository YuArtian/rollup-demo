(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime-corejs3/core-js-stable/instance/includes'), require('@babel/runtime-corejs3/core-js-stable/array/from')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime-corejs3/core-js-stable/instance/includes', '@babel/runtime-corejs3/core-js-stable/array/from'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.demo_umd = {}, global._includesInstanceProperty, global._Array$from));
})(this, (function (exports, _includesInstanceProperty, _Array$from) { 'use strict';

  const arr = [1, 2, 3];
  const res = _includesInstanceProperty(arr).call(arr, 1);
  console.log('res::', res);
  const arr2 = _Array$from(arr);
  const foo = async function () {
    console.log('foo!');
  };
  const bar = () => {
    console.log('bar');
  };
  bar();
  foo();
  // export { arr, foo };

  exports.arr = arr;
  exports.arr2 = arr2;
  exports.bar = bar;
  exports.foo = foo;

}));
