


jQuery(document).ready(function(){

	"use strict";
	
	arlo_tm_animate_text()
	arlo_tm_animate_text()

	
});

//ANIMATED TEXT SCRIPT

function arlo_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.animation_text_word');
	
		animateSpan.typed({
			strings: ["Student","Freelancer", "Web Designer", "Web Developer","Programmer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}


//Paralax Image Script 
const parallaxContainer = document.querySelector('.parallax-container');
const parallaxImage = document.querySelector('.parallax-image');

parallaxContainer.addEventListener('mousemove', function (e) {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    const moveX = -x * 50;
    const moveY = -y * 50;

    parallaxImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

parallaxContainer.addEventListener('mouseleave', function () {
    parallaxImage.style.transform = 'translate(0, 0)';
});



//PORTFOLIO FILTER
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter_column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)

var header = document.getElementById("myBtnContainer");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}