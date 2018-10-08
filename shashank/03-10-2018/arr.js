var array=[{name:'varun',p:6},
           {name:'dawan',p:5},
           {name:'patan',p:2},
        {name:'sourav',p:8},
    {name:'rohit',p:1}];


    function dynamicSort(property) {
  return function(a,b){
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;  
       return result;
  }
  
    }

    // ------OR------//
// function dynamicSort(){
//     array.sort(function(a,b){
//           return a.p - b.p
//     })
// }
   var priority = array.sort(dynamicSort("p"))

console.log(priority);
 array.pop();
console.log(priority);
array.push({name:"varun",p:10});
console.log(priority)

  

