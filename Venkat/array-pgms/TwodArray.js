//===================== 2d array operations ==================
var arr = [[1,2,3],[4,5,6],[7,8,9]]

console.log('---------printing array using for loop----------')
//printing array using for loop
for(i=0;i<arr.length;i++){
        console.log(arr[i])
}

//printing diagonal elements
console.log('---------printing diagonal elements----------')

for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if(i==j)
                 console.log(arr[i][j])
        }
}
console.log('---------printing diagonal elements----------')

for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if((i+j) == (arr.length-1))
                 console.log(arr[i][j])
        }
}
console.log('---------printing middle----------')

for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if((i==j)&& (j==((arr.length-1)/2)))
                 console.log(arr[i][j])
        }
}
                                                                                                                                                                                                                                              0


console.log('---------printing except middle----------')

for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if(!((i==j)&& (j==((arr.length-1)/2))))
                 console.log(arr[i][j])
        }
}

console.log('---------printing column elements----------')

for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if(j==1){
                        console.log(arr[i][j])
                }
        }
}
console.log('---------printing surrounding----------')

for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
                if(i==0){
                        console.log(arr[i][j])
                }
        }
}
