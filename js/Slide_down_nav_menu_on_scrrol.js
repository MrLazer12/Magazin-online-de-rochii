var navbar = document.getElementsByClassName("main_menu")[0];
    navbar.style.width = "100%";
var meniu_navigare = document.getElementById("meniu_navigare"); 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        navbar.style.position = "fixed";
        navbar.style.background = "rgb(244, 237, 214)";
        navbar.style.padding = "2vh 3%";
        navbar.style.top = "0vh";    

        if(window.innerWidth <= 900){
            meniu_navigare.style.position = "fixed";
            meniu_navigare.style.top = "8vh";   
            meniu_navigare.style.zIndex = "7";            
        }
    }
    else{
        navbar.style.background = "white";
        navbar.style.padding = "0 3%";
        navbar.style.position = "relative";
    }      
}