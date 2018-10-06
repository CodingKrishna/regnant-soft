let alphabets = "abcdefghijklmnopqrstuvwxyz";
let givenStr = "this is a string";

let alphArr = alphabets.split("");

function alphabetsChecker(alph, strGiven) {
  let strGivenArr = strGiven.split("");
  for (let i = 0; i < alphArr.length; i++) {
    if (strGivenArr.indexOf(alphArr[i]) > -1) {
      //   console.log(value);
    } else {
      return false;
    }
  }
  //   alphArr.forEach((value, index) => {
  //     // console.log(value);
  //     console.log(strGivenArr.indexOf(value));
  //     if (strGivenArr.indexOf(value) > -1) {
  //       //   console.log(value);
  //     } else {
  //       return false;
  //     }
  //   });

  return true;
}

let bool = alphabetsChecker(alphArr, givenStr);
console.log(bool);
