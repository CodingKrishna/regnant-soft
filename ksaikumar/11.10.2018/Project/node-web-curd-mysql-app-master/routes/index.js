
/*
 * GET home page.
 */

exports.index = function(req, res){
console.log("hi");

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM customer',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
                console.log(rows);
     
            res.send({data:rows});
                          
         });
         
         //console.log(query.sql);
    });
  
};