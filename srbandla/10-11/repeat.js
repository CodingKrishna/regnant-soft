function f1(letter){
	var st="ravi is good oohh aa";
	var arr=st.split("");
	var count=0;
    for (var i = 0; i < arr.length; i++)
    {
        
        if(arr[i]== letter)
        {
            count++; 
        }
    }
    console.log(count);
}
f1("a");
