var exp= require('express');
var mysql=require('mysql');
var http=require('http');
var student =require('./student');
var conn=require('express-myconnection');
var app=exp();
app.set('port', process.env.PORT || 4300);
app.use(exp.json());

app.set('view engine', 'ejs');

if ('development' == app.get('env')) {
    app.use(exp.errorHandler());
  }

app.use(
    conn(mysql,{
        host: 'localhost', //'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'nodejs'

    },'request')
);
app.get('/', student.list);
// app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  });