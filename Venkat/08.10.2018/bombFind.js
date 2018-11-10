var arr=[[1,1,1],[1,1,1],[1,1,0]];
for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i][j]*3 == 0){

                console.log('Bomb Found at ...!')
                console.log('Row:'+i)
                console.log('Column:'+j)
            }

        }

}
