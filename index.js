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
// export { arr, foo };
