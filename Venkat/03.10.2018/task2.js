// var arr = ['xl', 'l', 'xxl', 'm', 's'];
var sizes = [{size:'xl', p:4},{size:'l', p:3},{size:'xxl', p:5},{size:'s', p:1},{size:'m', p:2},]

// var arr1 = [];
// console.log('-----before sorting------')
// console.log(arr)
// function sortBySize(arr){
//     for( i=0; i<arr.length; i++){
//         if(arr[i]=='s'){
//             arr1[0] = arr[i];
//         }
//          if(arr[i]=='m'){
//             arr1[1] = arr[i];
//         }
//         if(arr[i]=='l'){
//             arr1[2] = arr[i];
//         }
//         if(arr[i]=='xl'){
//             arr1[3] = arr[i];
//         }
//         if(arr[i]=='xxl'){
//             arr1[4] = arr[i];
//         }
      
//     }
// }
// sortBySize(arr);
// console.log('-----after sorting------')
// console.log(arr1);
sizes.sort(function(a,b){
    return a.p-b.p;
})
// console.log(sizes);

for(i=0;i<sizes.length;i++){
    console.log(sizes[i].size)
}

