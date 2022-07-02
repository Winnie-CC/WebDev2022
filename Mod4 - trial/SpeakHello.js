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

