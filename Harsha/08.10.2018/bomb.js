var bomb=[[1,2,3],[4,5,6],[7,8,0]];

  for(var i=0;i<bomb.length;i++)
  {
      for(var j=0;j<bomb[i].length;j++)
      {
          var bomb1=bomb[i][j];
          if(bomb1==0)
          {
              console.log("bomb is located at : "+[i]+"&"+[j]);
          }
      }
  }