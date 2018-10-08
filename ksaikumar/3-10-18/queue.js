var person=[{name:"sai",priority:1,time:10.30},
            {name:"ravi",priority:2,time:10},
            {name:"siva",priority:1,time:10}];
            // console.log(person);  
            //time - who enter first in queue    
    person.sort(function(a, b)
       {
       if(a.priority == b.priority)
    {
         return a.time - b.time; 
    }else
    return a.priority - b.priority;
    })
console.log(person);