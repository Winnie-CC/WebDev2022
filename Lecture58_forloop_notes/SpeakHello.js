	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	
	var helloSpeaker = {};
	helloSpeaker.speakWord = "Hello ";
	helloSpeaker.speak = function (){
		console.log(helloSpeaker.speakWord + names[i]);
	}	
	var byeSpeaker = {};
	byeSpeaker.speakWord = "Good Bye ";
	byeSpeaker.speak = function (){
		console.log(byeSpeaker.speakWord + names[i]);
	}
	
	for (var i = 0; i < names.length; i++){
		
		var firstLetter = names[i].charAt(0).toLowerCase();
		
		if (firstLetter === 'j') {
		byeSpeaker.speak(names[i]);
		}
		else {
		helloSpeaker.speak(names[i]);
		}
		
	}

//Dom manipulation
console.log(document.getElementById("title")); //getElement is case sensitive
console.log(document instanceof HTMLDocument);

function sayHello() {
	console.log(document.getElementById("name").value);
	console.log(document.getElementById("name"));
}
function sayBye(){
	var byename = document.getElementById("byename").value;
	//var message = "Good Bye " + byename + "!";
	var message = "<h2>Good Bye " + byename + "!</h2>";
	
	//document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;

if (byename === "student"){
	//var title = document.getElementById("title");
	var title = document.querySelector("#title").textContent;
	
	title += "loving it!!";
	
	document.querySelector("#title").textContent = title;
	//this CSS selector will only select the first matching result,
	// need querySelectorAll to select every h1 element 
}
}
function saylala(){
	console.log("lalalalalalalalala");
}
//document.querySelector("button").addEventListener("click", saylala);
document.querySelector("button").onclick = saylala;
