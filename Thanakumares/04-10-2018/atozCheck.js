module.exports= function atozCheck(alphabet) {
var alphabet = "asdfghjklpoiuytrewqzxcvbnm";
var arr=[]
arr=alphabet.split("");
arr.sort();
var newArr=arr.filter(function (value,index,array) {
    if(value==array[index+1]){
        return false
    }else 
    return true
});
return (newArr.length==26);
}