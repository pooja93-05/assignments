const http= require('http');
const fs=require('fs');
const server=http.createServer(function(req,res){
    console.log('request was mase:'+req.url);
    res.writeHead(200,{'content-Type':'text/html'});
    const myReadStream=fs.createReadStream(__dirname+'/nodejsdemo.html','utf8');
    myReadStream.pipe(res);
});
server.listen(3000);
console.log('here we go');