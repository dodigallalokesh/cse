/*
const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'constant-type':'text/plain'});
    res.write("welcome to node js server");
    res.end();
}).listen(4231)//4231 is a port number

*/
//reading files from the server
const http=require('http');
const hostname='127.0.0.1';
const port=4231;
const fs=require('fs');
fs.readFile('first.html',(err,data)=>{
    if(err)throw err;
    const server=http.createServer((req,res)=>{
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end();
    })
    server.listen(port,hostname,()=>{console.log("server started at port number:",)})
})
