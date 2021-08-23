console.log("Hello World!");

var x=5;
var y=5;
var z=x+y;
console.log(z);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(2**3);

var x=100;
console.log(x);

//Boolean DataType
var ok=true;
var notDone=false;
console.log(notDone)

//string Datatype
var str ="This is double quote String";
var str1 = 'This is a singlequote String';
console.log(str);
console.log(str1);

//undefined
var k;
console.log(k);

//null
var i=null;

//object contains key and value json---.Javascript object notation
var student={
    "name":"Raja", "marks":100
}
console.log(student);

//type of
console.log(typeof(ok));
console.log(typeof(student));

//incremtn operator ++
var m=1;
m=m+1;
console.log(m);

//pre incremttn operator vs post incremtn operator
var n=20;
n++;//n=n+1;
console.log(n);

//operator procedence
/*
5+2*4-2 //20, 11
*/
console.log(5+2*4-2);

//pre vs post increment operator with the help of oerator precedence
var j=10;
j++;
console.log(j++ *5);
console.log(j);
//in first steps, original value with out increment will participate in arithmetic operation.
//in second step, value will be inceement

var z=5;
z++;
console.log(z++ * 10);
console.log(z);

//decrement operator
var h=100;
console.log(--h);