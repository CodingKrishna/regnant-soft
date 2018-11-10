var a=[0,0,1,0,0,0,0,0,1,0,0,0,0];
var count=1,length=0,final=0,start=0 ;


for(var i=0;i<a.length;i++)
{  count=1;
    for(j=i+1;j<a.length;j++)
    {
       if(a[i]==0 && a[j]==0)
       {
          startPosition=i;  
             count++;
       }
       else
       { 
           break;
       }
    }
                 if(length<count)
              {
                  final=startPosition;
                 length=count;
                 
              }
}
console.log("starting position "+final+" finalposition "+(final+length-1));
