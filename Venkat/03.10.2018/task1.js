function priority(arr) {  
arr.sort(function(a, b){
    return b.prior-a.prior
})
console.log('-------------Before Setting Priority-----------');
console.log(arr);
console.log('-------------After Setting Priority-----------');

console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
}
module.exports = priority;