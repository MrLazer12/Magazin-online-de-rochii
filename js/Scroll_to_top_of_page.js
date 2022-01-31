const top_up = document.querySelector(".top");

window.addEventListener("scroll",scroll_Funct);


function scroll_Funct() {
	if (window.pageYOffset > 150) {
		top_up.style.display = "block";
	} else {
		top_up.style.display = "none";
	}
}

top_up.addEventListener("click", top_top);

function top_top() {
	window.scrollTo(0, 0);
}


	