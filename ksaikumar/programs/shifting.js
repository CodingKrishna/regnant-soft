var arr=[1,2,3,4,5,6];
for(i=0; i<arr.length/2;i++){
 var x=arr.pop();
 arr.unshift(x);
}console.log(arr);