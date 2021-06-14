var myText = "Welcome to our website",
    i = 0;
var typeWriter = setInterval(function () { 
	document.getElementById('welcome').textContent += myText[i];
	i += 1;
	if (i >= myText.length) {
		
		clearInterval(typeWriter);
	}
 },100);

 $(window).on("load", function () {
	if (window.pageYOffset >= 1) {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
    $("#preloader").delay(4000).fadeOut("slow");
    $("#preloader #welcome").delay(3000).fadeOut("slow");
    $("body").delay(3000).css("ovelflow", "auto");
});



var CONTENT =  "Full-Stack web developer" , // List of sentences
 	PART_INDEX = 0, // Character number of the current sentence being processed 
 	INTERVAL_VAL, // Holds the handle returned from setInterval
 	ELEMENT = document.querySelector("#text"), // Element that holds the text
 	CURSOR = document.querySelector("#cursor"); // Cursor element 


// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  CONTENT.substring(0, PART_INDEX + 1);
	ELEMENT.innerHTML = text;
	PART_INDEX++;
	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === CONTENT) {
		// Hide the cursor
		CURSOR.style.display = 'none';

		clearInterval(INTERVAL_VAL);
		setTimeout(function() {
			INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  CONTENT.substring(0, PART_INDEX - 1);
	ELEMENT.innerHTML = text;
	PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(INTERVAL_VAL);
		PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			CURSOR.style.display = 'inline-block';
			INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
// Start the typing effect on load
setTimeout(function (param) { 
	INTERVAL_VAL = setInterval(Type, 100);
 },5500);/*4000*/



var myButton = document.getElementById('back-to-top');
window.onscroll = function() {
    'use strict';
    if (window.pageYOffset >= 500) {
        myButton.style.display = 'block';    
    } else {
        myButton.style.display = 'none';
    }
};
myButton.onclick = function up() {
    'use strict';
    window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
};


var year = new Date().getFullYear();
document.querySelector('.about-us p').innerHTML = 'Hello I`am <b>Abdulrahman</b> from Egypt ' + (year-2000) + ' Full Stack Web Developer,I started learning web Devolpment at the age of twenty';