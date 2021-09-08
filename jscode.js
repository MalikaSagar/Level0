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

function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log("The prime numbers between 1 and 100 are " + arr); // use arr result on your own
}

display(1000);

// initialize the array first
var numbers = [], primes = [], maxNumber = 100;

for(var i = 2;i<=maxNumber;i++){
 numbers.push(i);   
}

while(numbers.length){
    primes.push(numbers.shift());
    numbers = numbers.filter(
        function(i){return i%primes[primes.length-1]!=0}
    );
}

console.log("The first 100 Prime Numbers are " + primes);


//Since these are integers, you can also use any number of clever tricks1 to swap without using a third variable. 
//For instance you can use the bitwise XOR operator

let a = 20, b = 10;
[a, b] = [b, a];
console.log(`${a} ${b}`);

let c = 1, d = 2;
c = c ^ d;
d = c ^ d;
c = c ^ d;
    
console.log('c is now:', c);
console.log('d is now:', d);

//Fibonacci series is a series that generates subsequent series of numbers by the addition of the two previous numbers. ... 
//The first two terms of the Fibonacci series are zero and one, respectively.
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 50; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}

var e = 1,
    f = 2,
    tmp;
tmp = e;
e = f;
f = tmp;
console.log(e,f);

var x = 0;
var y = 1;
var z, i, n;
n=10;
for (i=2; i<=n; i++){
    z=x+y;
    console.log(z);
    x=y;
    y=z;
}

//declare the fib variable to be an array in the first place (such as var fib = [] or var fib = new Array()) and 
//If you use an array to store the fibonacci sequence, you do not need the other auxiliar variables (x,y,z) :
var fib = [0, 1];
for(var i=fib.length; i<20; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log("The febonacci sequence is " + fib); 

//Algorithm: The steps to convert from Celsius to Fahrenheit are as follows:
//Multiply Celsius value by 9/5
//Add 32 to Celsius value

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32  // make the given fahrenheit variable equal the given celsius value. multiply the given celsius value by 9/5 then add 32 
    console.log(fahrenheit) // return the variable fahrenheit as the answer
  }
  
  convertToF(36.88);

  //The switch statement is a flow-control statement that is similar to the if else statement. 
  //switch statement is usednto control the complex conditional operations.
  //switch statement is used to replace a statement that consists of complicated  if else statements chained together. 
var month = 6;
var monthName;
switch (month) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'April';
        break;
    case 5:
        monthName = 'May';
        break;
    case 6:
        monthName = 'June';
        break;
    case 7:
        monthName = 'July';
        break;
    case 8:
        monthName  =   'August';
        break;
    case 9:
        monthName   =   'September';
        break;
    case 10:
        monthName   =   'October';
        break;
    case 11:
        monthName   =   'November';
        break;
    case 12:
        monthName   =   'December';
    default:
        monthName = 'Invalid month';
}
console.log(monthName); // June
 
