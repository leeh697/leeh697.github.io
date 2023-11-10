let body = document.body;
let button = document.querySelector(".button");


function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

button.addEventListener("click", turnOnLight);


var x=0;
function myfun() {
	if(x==0)
	{document.getElementById("page1").src="imgs/page2.png";
	x++
	}
	else
	{document.getElementById("page1").src="imgs/page1.png";
	x=0
	}
}