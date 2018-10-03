// 1-s, 2-m, 3-l, 4-xl, 5-xxl

var shop = [
    {id:2, size:'M'},
    {id:1, size:'S'},
    {id:4, size:'XL'},
    {id:3, size:'L'},
    {id:5, size:'XXL'},
]
shop.sort((a,b) =>{
    return a.id-b.id
});
console.log(shop)