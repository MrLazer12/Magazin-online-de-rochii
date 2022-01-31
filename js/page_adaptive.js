var meniu_navigare1 = document.getElementsByClassName("meniu_navigare")[0];
var meniu_navigare2 = document.getElementsByClassName("meniu_navigare2")[0];
var button_display_menu = document.getElementById("button_display_menu");

button_display_menu.onclick = function show(){
    if(meniu_navigare2.style.display == "none"){
        meniu_navigare2.style.display = "block";
        meniu_navigare1.style.display = "none";
    } 
    else{
        meniu_navigare2.style.display = "none";
        meniu_navigare1.style.display = "flex";	
    }
}