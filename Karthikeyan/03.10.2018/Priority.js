var name = [{ a: "thi", pri: 2 }, { a: "kar", pri: 1 }, { a: "keyan", pri: 3 }];

function value() {
  name.sort(function(x, y) {
    return y.pri - x.pri;
  });
  console.log(name.pop());
  console.log(name.pop());
  console.log(name.pop());
}
value();
