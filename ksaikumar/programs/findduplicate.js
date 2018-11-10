arr=[100,25,3,4,5,6,7,8,3,4];

arr.sort(function(a,b){
    console.log(arr);
    console.log(a+"  "+b);
    console.log(a-b);
    return a-b;  
}
);
