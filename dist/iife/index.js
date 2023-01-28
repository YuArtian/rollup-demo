var demo_iife = (function (exports, _includesInstanceProperty, _Array$from) {
  'use strict';

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

  return exports;

})({}, _includesInstanceProperty, _Array$from);
