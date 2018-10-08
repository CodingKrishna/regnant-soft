var arr=[[1,1,1],[1,0,1],[1,1,1]];
var output="Welcome";
for (let i = 0; i < arr.length; i++) {
    const element=arr[i];
    for (let j = 0; j < element.length; j++) {
        if(element[j]*1==0){
            output= `Row ${i} and Column ${j}`;
            }
    }
}
console.log(output);
console.log(arr[1][1]);
