var slideIndex = 1;
showSlides(slideIndex,"mySlides");
showSlides(slideIndex,"comment");

function plusSlides(n) {
  showSlides(slideIndex += n,"mySlides");
}

function currentSlide(n,class_name) {
  if(class_name == 'mySlides')
    showSlides(slideIndex = n,"mySlides");
  else
    showSlides(slideIndex = n,"comment");
}

function showSlides(n,class_name) {
  var i;
  var slides = document.getElementsByClassName(class_name);
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) 
    slideIndex = 1;
    
  if (n < 1) 
    slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) 
      slides[i].style.display = "none";
  
  for (i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active", "");
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}