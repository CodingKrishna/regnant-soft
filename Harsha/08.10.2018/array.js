var male=[1,3,5,7,9];        //selecting male seat input in male array
var female=[2,4,6,8,10];     // selecting female seat input in female array 

for(var i=0;i<male.length;i++)
{
    var seat =[male[i]];

    for(var j=0;j<female.length;j++)
    {
       var seat1 =[female[j]];
  console.log(seat.concat(seat1));
       if(seat.concat(seat1))
       {
           console.log("cannot allow to sit male & female");
       }
      
       else 
       {
        console.log("can only allow to sit male & male || female & female");
       }
}
    
}

