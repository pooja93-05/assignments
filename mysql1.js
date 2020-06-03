const mysql1=require('mysql');
const connection=mysql1.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'DBtest'
    
});
connection.connect(function(err){
    if(err){
        console.log('error');
    }else{
        console.log('connected');
    }
});