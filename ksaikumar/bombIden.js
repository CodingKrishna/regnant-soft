var arr=[[1,2,3],[1,3,0],[1,1,1]];
for(i=0;i<arr.length;i++){
for(j=0;j<arr[i].length;j++){
var mul=(arr[i][j]*10);
if(mul==0){
    console.log("bomb is in road no-"+i,"street number "+j);
}}}