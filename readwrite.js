var fs=require('fs');
// var data=fs.readFile('read.txt',function(err,data){
//     if(err)
//     return console.error(err);
//     console.log(data.toString());
// });



// fs.writeFile('write.txt','hello world',function(err,data){
//     if(err)
//     return console.error(err);
//     console.log(data);
// });

fs.appendFile('write.txt', '\nNew Line ENtered', (err)=>{
    if(err) throw err;
    

    console.log('new line created')
} );