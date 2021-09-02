const { query } = require("express");
var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/student/:id",function(req,res){
    console.log(req.query)
    var studentObj = {"name":"raj","marks":90, "id":req.params.id};
    res.json(studentObj);
})

app.listen(4001,function(){
    console.log("server started successfully...")
});

app.post("/student/:id",function(req,res){
    var studentObj = {"name":"raj","marks":90};
    res.json(studentObj);
})

app.put("/student/:id",function(req,res){
    var studentObj = {"name":"raj","marks":90};
    res.json(studentObj);
})

app.delete("/student/:id",function(req,res){
    var studentObj = {"name":"raj","marks":90};
    res.json(studentObj);
})

