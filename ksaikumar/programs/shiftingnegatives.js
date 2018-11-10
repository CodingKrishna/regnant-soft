var arr=[1,-1,2,3,-2,-5,-3,4,5,-6];
for(var i=0;i<(arr.length-1)/2;i++){
    if(arr[i]<0){
        temp=arr[i];
        for(j=arr.length-1;j>(arr.length-1)/2;j--){
            if(arr[j]>0){
            arr[i]=arr[j];
            arr[j]=temp;
             }     }
    }
}console.log(arr);