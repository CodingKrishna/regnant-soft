var items = [
  { size: "XL", value: 4 },
  { size: "L", value: 3 },
  { size: "M", value: 2 },
  { size: "S", value: 1 },
  { size: "XXL", value: 5 }
];
function value() {
  // sort by value
  items.sort(function(a, b) {
    return a.value - b.value;
  });
  for (i = 0; i <= 4; i++) {
    console.log(items[i].size);
  }
}
value();
