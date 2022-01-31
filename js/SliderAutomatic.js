var slideIndex2 = 0;
showSlides2();

function showSlides2(){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for(i = 0; i<slides.length; i++)
		slides[i].style.display = "none";
	
	slideIndex2++;
	
	if(slideIndex2 > slides.length)
		slideIndex2 = 1;
    
	slides[slideIndex2-1].style.display = "block";
	setTimeout(showSlides2,5000);
    
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++)
      	dots[i].className = dots[i].className.replace(" active", "");

  	dots[slideIndex2-1].className += " active";
}