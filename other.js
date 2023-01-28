const arr = [1, 2, 3];
const res = arr.includes(1);
console.log('res::', res)
const arr2 = Array.from(arr)
const foo = async function () {
  console.log('foo!')
}

foo()
export { arr, foo, arr2 };
// export { arr, foo };
