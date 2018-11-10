arr = [
  "AAA",
  "BBB",
  "CCC",
  "DDD",
  "EEE",
  "Apple",
  "Banana",
  "Orange",
  "Asparagus",
  "Carrot",
  "Tomato",
  "Pineapple"
];
newarr = [];
numberOfTeams = arr.length / 12;
console.log(numberOfTeams);


for (let i = 0; i < numberOfTeams; i++) {
  console.log("all is aaa");
  makeTeam();
  console.log(arr);
  console.log(newArr);
}


function makeTeam() {
    
  for (let i = 0; i < 12; i++) {
    randVal = Math.random(Math.floor() * arr.length);
    console.log(randVal);
    newarr.push(randVal);

    arr.splice(randVal, 1);
  }
}
