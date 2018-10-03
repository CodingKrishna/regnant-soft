var p = [
    {name:'ram', age:'25', priority:3},
    {name:'sam', age:'26', priority:5},
    {name:'raj', age:'29', priority:7},
    {name:'bheem', age:'35', priority:1},
    {name:'arjun', age:'44', priority:6},
    {name:'manu', age:'65', priority:2},
];
p.sort(function(a,b){
    return b.priority-a.priority
});
console.log(p.pop())
//console.log(p)