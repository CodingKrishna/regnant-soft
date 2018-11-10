var arr = [23,34,22,76,20,43,307];
 function checkzero(){
    for(var i=0;i<arr.length;i++){ 
    var j = arr[i];
    var temp;
    
    if(j<10){
        break;
    }
    
        if(j%10 ==0){
        console.log(i);
        }
        else{
            temp== (j/10);
            j=temp;
        } 
    }
}
arr.checkzero();

