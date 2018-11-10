var arr=[1,2,2,2,3,3,3,4,4,4,4,5,5,5,6,6,15];
var arr1=[];
for(var i=0,len=arr.length;i<len ; i++){
   
//   if(arr.indexOf(arr[i])== i){
    if(arr1.indexOf(arr[i])== -1){   
    arr1.push(arr[i]);     
  }
}console.log(arr1);