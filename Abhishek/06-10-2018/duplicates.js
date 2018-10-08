let strArr = ["abc", "bca", "cca", "abc"];
let alphabetsArr = ["a", "b", "c"];

let arr = [];
strArr.forEach(value => {
  let total =
    (alphabetsArr.indexOf(value[0]) + 1) * 100 +
    (alphabetsArr.indexOf(value[1]) + 1) * 10 +
    (alphabetsArr.indexOf(value[2]) + 1) * 1;

  arr.push({ [value]: total });
});

console.log(arr);
