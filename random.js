function getRandomProblem(){
	var x = Math.floor(Math.random() * 31 + 1);
	if (x == 1.0){
		return "2015-1.html";
	}
	else if (x == 2.0){
		return "2015-2.html";
	}
	else if (x == 3.0){
		return "2015-3.html";
	}
	else if (x == 4.0){
		return "2015-4.html";
	}
	else if (x == 5.0){
		return "2015-5.html";
	}
	else if (x == 6.0){
		return "comingsoon.html";
	}
	else if (x == 7.0){
		return "comingsoon.html";
	}
	else if (x == 8.0){
		return "comingsoon.html";
	}
	else if (x == 9.0){
		return "comingsoon.html";
	}
	else if (x == 10.0){
		return "comingsoon.html";
	}
	else if (x == 11.0){
		return "comingsoon.html";
	}
	else if (x == 12.0){
		return "comingsoon.html";
	}
	else if (x == 13.0){
		return "comingsoon.html";
	}
	else if (x == 14.0){
		return "comingsoon.html";
	}
	else if (x == 15.0){
		return "comingsoon.html";
	}
	else if (x == 16.0){
		return "comingsoon.html";
	}
	else if (x == 17.0){
		return "comingsoon.html";
	}
	else if (x == 18.0){
		return "comingsoon.html";
	}
	else if (x == 19.0){
		return "comingsoon.html";
	}
	else if (x == 20.0){
		return "comingsoon.html";
	}
	else if (x == 21.0){
		return "comingsoon.html";
	}
	else if (x == 22.0){
		return "comingsoon.html";
	}
	else if (x == 23.0){
		return "comingsoon.html";
	}
	else if (x == 24.0){
		return "comingsoon.html";
	}
	else if (x == 25.0){
		return "comingsoon.html";
	}
	else if (x == 26.0){
		return "comingsoon.html";
	}
	else if (x == 27.0){
		return "comingsoon.html";
	}
	else if (x == 28.0){
		return "comingsoon.html";
	}
	else if (x == 29.0){
		return "comingsoon.html";
	}
	else if (x == 30.0){
		return "comingsoon.html";
	}
	else if (x == 31.0){
		return "comingsoon.html";
	}
}
function redirect(){
	var url = getRandomProblem();
	window.location.href = url;
}
var button = document.getElementById("randombutton");
button.addEventListener("click", redirect);