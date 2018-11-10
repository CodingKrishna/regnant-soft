var arr = [-1,2,-3,4,-4,6,-6,-9,-7]
for(i=0;i,i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if(arr[j]<arr[j+1]){
                        temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp;
                }
        }
}
console.log(arr)