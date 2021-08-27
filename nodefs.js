var fs = require("fs");

console.log(1);
fs.readFile("sample.txt",function(err,data){
    console.log("error is ....."+err);
    console.log("Data is ..."+data);
});
console.log(2);

//12Hello