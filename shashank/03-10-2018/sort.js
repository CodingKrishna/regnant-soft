 //var arr=["XL","XXL","M","L","S"];

var array=[{name:'XL',p:6},
           {name:'XXL',p:8},
           {name:'M',p:2},
        {name:'L',p:5},
    {name:'S',p:1}];

    function dynamicSort(){
        array.sort(function(a,b){
              return a.p - b.p
        });
       
    }

    function display(){
        for(i=0;i<array.length;i++){
            console.log(array[i].name);
        }
    }
    dynamicSort();
    display();