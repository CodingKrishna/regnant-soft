var arr=[   [1,1,0],
            [1,1,1],
            [1,1,1]
        ];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j]==0){
            console.log('zero at '+(i+1)+' Row,'+(j+1)+'column');
        }
    }
}
