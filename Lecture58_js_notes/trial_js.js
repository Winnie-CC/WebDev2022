//Lecture 42-43

var x ="Hello World!";

// +=: string = string + "World"
var string = "Hello";
string += "World";
console.log(string);


if (x == undefined){
	console.log("x is undefined.");
}
else{
	console.log("x has been defined.");
}

// y is undefined, u is not defined. After u, nothing generated.
//var y;
//console.log(y);
//console.log(u);

//Math operators
console.log((5+4)/3);
//you'll get 3
console.log(undefined/5);
//you'll get NaN = not a number


//Regular Equality == and Strict Equality ===
var b = "4", c = 4;
if (b == c){
	console.log("b is equal to c.");
}
else{
	console.log("b is not equal to c.");
}
if (b === c){
console.log("b is STRICTLY equal to c.");
}
else{
	console.log("b is NOT STRICTLY equal to c.");
}

//For loop
// i++ = loop plus 1
var sum = 0;
for (var i = 0; i < 10; i++){
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0 through 9 is:" + sum);

//Default values
function orderChickenWith(sideDish){
	sideDish = sideDish || "whatever!";
	console.log("Chicken with "+ sideDish);
}
orderChickenWith("noodles");
orderChickenWith();

//Object
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	$stock: 110,
	"stock of company":110
};
console.log(facebook);
console.log(facebook.ceo.firstName);

//Pass by Value or Pass by Reference
var d = 7;
var e = d;
console.log("Original by value");
console.log(d);
console.log(e);

e = 5;
console.log("When e is updated under Pass by Value");
console.log(d);
console.log(e);

var f = {x:7};
var g = f;
console.log("Original by reference")
console.log(f);
console.log(g);

g[x]=5;
console.log("When e is updated under Pass by Reference")
console.log(f);
console.log(g);

//prototype new Lecture 48

//Lecture49 Array
var names = ["Pen","Cat","Bear"];
for (var i=0; i < names.length; i++){
	console.log("Hello " + names[i]);
}
for (var name in names){
	console.log("Hi " + names[name]);
}

//End
console.log("End");