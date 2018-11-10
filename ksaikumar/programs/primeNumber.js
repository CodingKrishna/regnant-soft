var arr=[2,3,4,5,6,12,45,56,74,82,13,45];
for(var i=0;i<arr.length;i++){
    count=0;
    for(j=2;j<arr[i]/2;j++){
    if(arr[i]%j == 0){
       count=1;
    }}
    if(count==0){
        console.log(arr[i] +" is prime number");
    }
}