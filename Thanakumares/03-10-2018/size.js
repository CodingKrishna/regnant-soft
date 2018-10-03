
module.exports= function sorting(array) {
 array.sort(function (a,b) {
    if(a=="s"&&b=="m"||a=="m"&&b=="l"||a=="l"&&b=="xl") return false;
    else if(a=="xl"&&b=="xxl"||a=="xxl"&&b=="xxxl"||a=="xl"&&b=="xxxl") return false;
    else return true;
}    
);
return array;
}
