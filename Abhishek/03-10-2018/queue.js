personObjArr = [
  {
    personName: "alice",
    time: 12345,
    priority: 0
  },
  {
    personName: "Bob",
    time: 12345,
    priority: 1
  },
  {
    personName: "Alex",
    time: 12345,
    priority: 2
  }
];
// #method1 using filter for functional programming
// function formQueue(arr) {
//   p1 = arr.filter(value => value.priority == 2);
//   p2 = arr.filter(value => value.priority == 1);
//   p3 = arr.filter(value => value.priority == 0);

//   return [...p1, ...p2, ...p3];
// }

// var x = formQueue(personObjArr); // required Queue
// console.log(x);

// method2 in normal way.

function Queue(arr) {
  var p1 = [];
  var p2 = [];
  var p3 = [];
  arr.forEach((value, i) => {
    if (value.priority == 2) {
      p1.push(arr.splice(i, i));
    }
  });

  arr.forEach((value, i) => {
    if (value.priority == 1) {
      p2.push(arr.splice(i, i));
    }
  });

  p3 = arr;
  return [...p1, ...p2, ...p3];
}

var y = Queue(personObjArr); // required Queue
console.log(y);
