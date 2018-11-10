arr=[[1,2,3],[2,3,4],[3,2,5]];

for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(i==j){
            console.log(arr[i][j]);
        }
    }
}
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if((i+j)==(arr.length-1)){
            console.log(arr[i][j]);
        }
    }
}