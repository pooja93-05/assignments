const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.write('HEllo WOrld');
        res.end();
    }
    if(req.url==='/product'){
        res.write(JSON.stringify('amplifier'));
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000')