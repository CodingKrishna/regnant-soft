var sequenceArray = ["s", "m", "l", "xl"];
var givenArray = ["s", "m", "l", "xl", "s", "m", "l", "xl"];

function sortArr(arr, sortSequence) {
  var sortedArray = [];
  for (var i = 0; i < sortSequence.length; i++) {
    arr.forEach(value => {
      if (value === sortSequence[i]) {
        sortedArray.push(value);
        // console.log(sortedArray);
      }
    });
  }
  return sortedArray;
}

var SortedTshirtsArray = sortArr(givenArray, sequenceArray);
console.log(SortedTshirtsArray);
