var arr=["aad","abcd","aaaa","aaas","abaacaa"];
for(i=0;i<arr.length;i++){
   var a= arr[i].split("");
   for(j=0;j<arr[i].length;j++){
    count=0;
       for(k=j+1;k<arr[i].length;k++){
       if(a[j]==a[k]){
           count++;
        }} console.log(a[j] +" is "+ count+" times"); 
        }}
