'use strict';

var _includesInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/includes');
var _Array$from = require('@babel/runtime-corejs3/core-js-stable/array/from');

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
