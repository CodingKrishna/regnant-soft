var arr=[1,2,3,4,6,5,7,4,7];
var i, temp=0;
for(i=0;i<=(arr.length-1)/2;i++){
         temp=arr[arr.length-1-i];
         arr[arr.length-1-i]=arr[i];
         arr[i]=temp;
}console.log(arr);