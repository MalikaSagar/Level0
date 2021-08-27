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

//the += operator
var x = 10;
x += 5;
console.log(x);

//The + operator can also be used to add (concatenate) strings.
let text1 = "I";
let text2 = "am";
let text3 = "Mrs Vasantha";
let text4 = text1 + " " + text2 + " " + text3
console.log(text4);

//The += assignment operator can also be used to add (concatenate) strings:
let text5 = "What a very ";
text5 += "nice day";
console.log(text5)

//Some more operators
//Not operator gives boolean output. i.e. true or false
// ! - not symbol
console.log(!true);
console.log(!false);
console.log(!0);

//o means flase, false means false, undefined is also false
console.log(!undefined);

//== vs === ---> to validate whether L.H.S is equal to R.H.S
console.log(2 == 3); //false
console.log(0 == false); //true because JS CONSIDERS 0 AS FALSE VALUE
console.log(0 === false); 

//comparison operators
console.log(2<3);
console.log(5>3);
console.log(4<=2+2);
console.log(5>=2.5+2.5);

//And or Or operator
//When both conditions are true, then only the output will be true
//When one of the conditions satisfies then the output will be true.

console.log(10 && 9); //if first one is a truethy value , return second one.
console.log(0 && true);//if first one is a falsy value, return first one.

/* true && false
false && false
false && true */

//OR 
//When one of the condition is satisfies then the out will be true.
console.log(10 || 9);
console.log(0 || true);
console.log(9+7 || 9-9);

//Number
//1. to extract number from a string
console.log(Number("1500"));
console.log(Number.parseInt(450.8247));
console.log(Number("AP6801")); // NaN --> not a number
console.log(isNaN("AP6801"));

//Uppercase and lowerCase
var strg1 = "ABC";
console.log(strg1.toLowerCase());
console.log("verygood".toUpperCase());

//objects
//Two ways to access JavaScript object properties
//using "." operator
//using "[]" operator
var DOB = {"Ram":"30-02-1987", "Jay":"20-12-1992"};
console.log(DOB.Ram);

//call by value vs vall by reference
var sampleobj1={"name":"Raja"};
var sampleobj2=sampleobj1; //JavaScript passes the address not the value
sampleobj2.name="Vasantha";
console.log(sampleobj2);
console.log(sampleobj1);

 
//conditionals
//if rains take umbrella
//if number is>0 print it
var age=61;
if(age>18 && age>60){
    console.log("Major");
}

else if(age>=60){
    console.log("Senior Citizen");
}
else{
    console.log("Minor");
}

//for loop
//to iterate till condition is met..
var count = 100;
for (var i=0; i<count; i++){
console.log("picked"+" "+ i+"th apple");
}
//program 1 to print whole numbers from 0 to 100
for (var j=0; j<=100; j++){
    console.log(j);
}

//program to print even numbers
for (var k=2; k<=100; k++){
    if (k%2 == 0) {
        console.log(k);
    }
}
//functions
//boilerplate code
//self documented code

var z=x+y;
function sum(a,b){
    return a+b;
}
console.log(sum(10,5));//10 and 5 are called arguments
console.log(sum(0,-1));

//callbacks
//after execution of one function based on the results of that function do another function.
var initialBalance =15000;
var balanceCredit = function(depositAmount, smsFunction){
    smsFunction(initialBalance+depositAmount);

}
var sendSMS = function(newBal){
    console.log("YOUR NEW ACCOUNT BALANCE IS ...."+newBal);
}
balanceCredit(4000,sendSMS);
