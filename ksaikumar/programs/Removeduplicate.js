var arr=[1,2,3,1,2,3,4,5,6];
var newarr=[];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
           arr.splice(j,1); 
         }             
        // else {
        // newarr.push(arr[i]);}
    } 
}
    console.log(arr);