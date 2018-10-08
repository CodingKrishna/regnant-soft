var arr=[[[1],[2]],[[3],[4]],[[5],[6]]];
function Booking(person){
    let loop=0;
    let seatNo=0;
for (let i = 0; i < arr.length; i++) {
    const bus = arr[i];
   if(bus[0][1]===undefined){
            arr[i][0].push(person);
            seatNo=arr[i][0][0];
            loop++;
            break;
            }
    else if(bus[0][1].gender==person.gender){
            if(bus[1][1]==undefined){
                arr[i][1].push(person);
                seatNo=arr[i][1][0];
                loop++;
                break;
            }
        }        
}
if(loop==0){
    return ("No Available Seats for :"+ person.name +". Try another Bus");
    
}else{
    return ("Successfully Booked, Seat No. : "+seatNo)
}
}
console.log(Booking({name:"thanakumares",age:25,gender:"f",pan:"AOIPYY124"}));
console.log(Booking({name:"sai",age:25,gender:"m",pan:"AOITYY143"}));
console.log(Booking({name:"sneha",age:25,gender:"f",pan:"APPYY189"}));
console.log(Booking({name:"radha",age:25,gender:"f",pan:"AOIPYY124"}));
console.log(Booking({name:"karthi",age:25,gender:"m",pan:"AOIPYY124"}));
console.log(Booking({name:"prabha",age:25,gender:"f",pan:"BOIYU098"}));
console.log(Booking({name:"venkat",age:25,gender:"m",pan:"WEOPT123"}));
console.log(arr);
