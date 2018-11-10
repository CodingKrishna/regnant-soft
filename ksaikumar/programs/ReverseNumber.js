function reverseNumber(n){
    n=n+"";
    return n.split("").reverse().join("");
    
}
var rev= reverseNumber(12345);
console.log(rev);
