module.exports= function sorting(str) {
    var arr=str.split("");
    var data=[];
    var alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let count=0, index = 0; index < arr.length; index++) {
        const element = arr[index];
        for (let i = alphabets.indexOf(element); i <= alphabets.length; i++) {
            if(arr[index]==alphabets[i])
            {
                index++;
                if(i!=alphabets.length)
                continue;
            }
            data.push(arr.slice(count,index).toString());
            count=index;
            break;
        }
    }
    data.sort(function (a,b) {
        return a.length-b.length;
    });
    return(data.pop());
    }