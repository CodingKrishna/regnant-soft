arr = [-1, 1, 10, 2, -2, -5, 6, 7, -4];

for (var i = 0; i < arr.length; i++) {
  debugger;
  if (arr[i] < 0) {
    let j = arr[i];

    for (let k = i; k < arr.length - 1; k++) {
      arr[k] = arr[k + 1];
    }
    arr[arr.length - 1] = j;
  }
}
console.log(arr);
