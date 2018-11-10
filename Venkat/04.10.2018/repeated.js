module.exports= function RepeatedString(str) {

    var count=[];
    var arr=str.split(' ');
    arr.sort();
    for (let c=1,index = 0; index < arr.length; index++) {
        if(arr[index]==arr[index+1]){
            c++;
            continue;
        }
        count.push({name:[arr[index]],value:c});
        c=1;
    }
    count.sort(function(a,b){
        return a.value-b.value;
    });
    HighestValue=count.pop()
     return (HighestValue.name+" = "+HighestValue.value);
    }
    