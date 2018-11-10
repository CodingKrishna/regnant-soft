function f1(){
	var st="ravi is good";
	var sep=st.split();
	var count=0;
	for (var i = 0; i < sep.length; i++) {
		if(sep[i]=="o"){
			count++;
			console.log(sep[i]);

		}
	}
}
f1();