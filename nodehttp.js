var http = require("http");//used to build servers
var fs = require("fs");
//port and //host

//By default we us "localhost" to refer to our computer, 127.0.0.1

var port = 3000; //There are around 6000
var host = "127.0.0.1"; //machine address can be accessed

//create server and serve Practice.html

var server = http.createServer(function(req,resp){
    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    fs.readFile("Practice.html",function(err,data){
        if(!err){
            res.write(data);//response.write
            res.end();//telling browser that we are done.
        }
    })
});

server.listen(port,host,function(){
    console.log("server started successfully");
});

