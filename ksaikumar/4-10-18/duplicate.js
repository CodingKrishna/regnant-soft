var string="asdertynjfifmlsdlpprwkdkfmllsa";
var alpha="abcdefghijklmnopqrstuvwxyz";
var arr=string.split("");
console.log(arr.length);
var arr2=alpha.split("");
console.log(arr2.length);
var i;
for(var j=0; j < arr2.length; j++){
    var count=0;
    for(i=0; i < arr.length; i++){
    if(arr2[j]==arr[i]){ 
        count++;
    }}
    if(count==0)
    console.log(arr2[j]+"  letter is not there");
    else if(count==1)
    console.log(arr2[j]+"  repeated  "+ count +"  time only");
    else
    console.log(arr2[j]+"  repeated  "+ count +"  times");
}
