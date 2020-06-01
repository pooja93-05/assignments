var express=require('express');
var mysql=require('mysql');
var app=express();
var connection=mysql.createConnection({
    //properties
    host:'localhost',
    user:'root',
    password:'',
    database:'DBtest'
});
connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }else{
        console.log('coonected');
        }
});
app.get('/',function(req,res){
    //about mysql
    connection.query("SELECT * FROM sampleTable",function(error,rows,fields){
    if(!!error){
        console.log('error in that query');

    } else{
        //parse with your rows/feilds
        console.log('successful query');
        }
    });

});
app.listen(1337);