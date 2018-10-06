let givenStr = "this is is the string";
let obj = {};
let givenStrArray = givenStr.split(" ");
let max = 0;
let str = "";
givenStrArray.forEach(value => {
  if (obj[value]) {
    obj[value]++;
  } else {
    obj[value] = 1;
  }
});

console.log(obj);

Object.keys(obj).forEach((value, i) => {
  if (obj[value] > max) {
    max = obj[value];
    str = value;
  }
});

console.log(str);
