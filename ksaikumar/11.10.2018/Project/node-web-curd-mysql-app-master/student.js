exports.list = function(req, res){

    req.getConnection(function(err,conn){
         
          var query = conn.query('SELECT * FROM student',function(err,rows)
          {
              
              if(err)
                  console.log("Error Selecting : %s ",err );

              res.render('students',{page_title:"Customers - Node.js",data:rows});
                            
           });
           
           //console.log(query.sql);
      });
    
  };