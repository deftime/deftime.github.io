// var admin;
// var name = "Василий";
// var hello = "Привет";
//
// admin = name;
//
// alert(hello + "," + " " + admin + "!");

//----------------------

// var a = 1;
// var b = 2;
// var c;
// var d;
//
// c = ++a; alert(c);
// d = b++; alert(b);
//
// c = (2+ ++a); alert(c);
// d = (2+ b++); alert(d);
//
// alert(a);
// alert(b);

//------------------------

// var random1 = Math.floor(Math.random()*10);
// var random2 = Math.ceil(Math.random()*10);
// var rez = Math.pow(random1, random2);
//
// alert(rez);

//-------------------------

// var line = prompt("What is your name?", "");
//
// alert("Hello, " + line + "!");
//
// var age = confirm("Are you 18 years old?");
//
// alert("OK");

//--------------------------

// var num1 = +(prompt("Enter first number", ""));
// var num2 = +(prompt("Enter second number", ""));
//
// var step = Math.pow(num1, num2);
// var random = (10 + Math.random()*100 - 10);
//
// var q = confirm("Pow or random?");
//
// if (q) {
//   alert(step);
// } else {
//   alert(random);
// }

//----------------------------

var num1 = +(prompt("Enter first number", ""));
var num2 = +(prompt("Enter second number", ""));
var oper = prompt("What operation? Enter +, -, *, /");

if (oper == "+") {
  alert(num1+num2);
} else if (oper == "-") {
  alert(num1-num2);
} else if (oper == "*") {
  alert(num1*num2);
} else if (oper == "/") {
  alert(num1/num2);
}
