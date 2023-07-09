var express=require('express');
var app=express();
app.get('/',function(req,res){
res.send("welcome to express framework");
});
app.get('/vishnu',function(req,res){
res.send("vishnu priya");
})
app.use(express.static('public'));
app.get('/process_get',function(req,res){
response={
first_name:req.query.fn,
second_name:req.query.sn
}
console.log(response);
res.end(JSON.stringify(response));
})
app.listen(3001,()=>{console.log("server started at port 3001")});