
module.exports= function sorting(array) {
 array.sort(function (a,b) {
     if(a.priority==b.priority){
        return a.time>b.time;
     }
    return a.priority>b.priority;
});
return array;   
}

