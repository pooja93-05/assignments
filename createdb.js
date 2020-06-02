const mysql1=require('mysql');
const connection=mysql1.createConnection({
    host:'localhost',
    user:'root',
    password:'',    
});
connection.query('create database mydb',function(err,result){
    if(err){
        console.log('error');
    }else{
        console.log('database created');
    }
});