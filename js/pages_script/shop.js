var Dresses = document.getElementsByClassName("dress");
var current_dresses = document.getElementById("current");
    current_dresses.innerHTML = Dresses.length;

set_background_for_img();

function set_background_for_img(){
    for (let i = 0; i < Dresses.length; i++){
        Dresses[i].style.backgroundImage = "url(img/girls/"+(i+1)+".jpg)";
        Dresses[i].style.backgroundPosition = "center";
        Dresses[i].style.backgroundSize = "cover";
        Dresses[i].setAttribute("onmouseover","change_bg(event, 'img/girls/rochii/"+(i+1)+".jpg')");
        Dresses[i].setAttribute("onmouseout","initial_bg(event,'img/girls/"+(i+1)+".jpg')");
    }
}
function change_bg(event, url){
    event.currentTarget.style.backgroundImage = "url("+url+")";
}
function initial_bg(event, url){
    event.currentTarget.style.backgroundImage = "url("+url+")";
}

//==SORT dresses======================================================================================
var filter = document.getElementById("filter");
var section = document.getElementById("catalog");

filter.onchange = function sort_ascendent_or_descendent(IDcheckbox){
    var selectedOption = filter.options[filter.selectedIndex];
    console.log(selectedOption.text);
    for (let i = 0; i < Dresses.length; i++){
        for (let j = i; j < Dresses.length; j++){
            first = Dresses[i].getAttribute("data-price");
            second = Dresses[j].getAttribute("data-price");

            switch (selectedOption.text) {
                case 'Preț la mare la mic':
                    if (+first < +second){
                        let replaceNod = section.replaceChild(Dresses[j],Dresses[i]);
                        insertAfter(replaceNod,Dresses[i]);
                    }                        
                break;
                    
                case 'Preț la mic la mare':
                    if (+first > +second){
                        let replaceNod = section.replaceChild(Dresses[j],Dresses[i]);
                        insertAfter(replaceNod,Dresses[i]);
                    }
                break;
            }
        }
    }   
}
function insertAfter(elem,refElem){
    return refElem.parentNode.insertBefore(elem,refElem.nextSibling);
}
// ===============================================================================
var display_2 = document.getElementById("display_2");
var display_3 = document.getElementById("display_3");
var display_4 = document.getElementById("display_4");
var dresses = document.getElementsByClassName("dress");

    display_3.classList.add("active");
    for (let i = 0; i < dresses.length; i++)
        if(window.innerWidth < 1000)
            dresses[i].style.width = "28vw";
        else
            dresses[i].style.width = "21.4vw";

display_2.onclick = function show(){
    for (let i = 0; i < dresses.length; i++) 
        if(window.innerWidth < 1000)
            dresses[i].style.width = "42vw";
        else
            dresses[i].style.width = "32.8vw";
    
    display_2.classList.add("active");
    display_3.classList.remove("active");
    display_4.classList.remove("active");
}
display_3.onclick = function show2(){
    for (let i = 0; i < dresses.length; i++) 
        if(window.innerWidth < 1000)
            dresses[i].style.width = "28vw";
        else
            dresses[i].style.width = "21.4vw";
    
    display_3.classList.add("active");
    display_2.classList.remove("active");
    display_4.classList.remove("active");
}
display_4.onclick = function show(){
    for (let i = 0; i < dresses.length; i++) 
        if(window.innerWidth < 1000)
            dresses[i].style.width = "28vw";
        else
            dresses[i].style.width = "15.8vw";

    display_4.classList.add("active");
    display_3.classList.remove("active");
    display_2.classList.remove("active");
}

// SIDEBAR scripts===============================================================
var SIDEBAR = document.getElementsByClassName("SIDEBAR")[0];
let title_sidebar = document.getElementById("title_sidebar");
var button_show_menu = document.getElementById("show_menu");

if(window.innerWidth < 700)
    title_sidebar.setAttribute("onclick","close_sidebar()");

button_show_menu.onclick = function showSidebar(){
    if(SIDEBAR.style.display == "none"){
        SIDEBAR.style.display = "block";
        SIDEBAR.style.position = "fixed";
        SIDEBAR.style.left = "0";
        SIDEBAR.style.top = "0";
        SIDEBAR.style.boxShadow = "0px 0px 0px 100vw #00000070";

        document.getElementById("svg").style.display = "none";
        document.getElementById("close_SIDEBAR").style.display = "block";
    } 
    else{
        close_sidebar();
        document.getElementById("svg").style.display = "block";
        document.getElementById("close_SIDEBAR").style.display = "none";
    }
}
function close_sidebar(){SIDEBAR.style.display = "none";}
// ======================================================================================
var nav = SIDEBAR.getElementsByTagName("nav")[0];
var li = nav.getElementsByTagName("li");

for (let i = 0; i < li.length; i++){
    let span = li[i].getElementsByTagName("span")[0].getElementsByTagName("span")[0];
    li[i].setAttribute("onclick", "display('"+span.innerHTML+"')");
}


function display(span_innerTExt){
    let count = 0;
    let no_found = document.getElementsByClassName("no_found");
//dacă numărul blocurile cu clasa no_found depășește sau egală cu 1 se șterg
    if(no_found.length >= 1 )
        for (let i = 0; i < no_found.length; i++) {
            section.removeChild(no_found[i]);
        }
//Selectarea rochiilor
    for (let i = 0; i < Dresses.length; i++) {
        let h2 = Dresses[i].getElementsByTagName("div")[0].getElementsByTagName("h2")[0];
        if( h2.innerHTML == span_innerTExt) 
            Dresses[i].style.display = "flex";
        else{
            Dresses[i].style.display = "none";
            count++;
        }
    }
//Dacă valoare count == numărul de rochii atunci se afișează mesajul nu s-a găsit
    if(count == Dresses.length){
        let p = document.createElement("p");
            p.innerHTML = "Nu s-sau găsit produse de categoria "+span_innerTExt;
            p.classList.add("no_found");
        section.appendChild(p);
    }
}
