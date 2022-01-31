"use strict";

var input_cw;
var CW_input_number = 0;
// --------------------------
var inputNum = document.getElementById("number");
var deleteSpan = document.getElementById("number0");
// --------------------------
var card_holder = document.getElementById("nameInput");



function setBorder(IDelement){
    IDelement = document.getElementById(IDelement);
    IDelement.style.transition = "1s";
    IDelement.style.borderRadius = "10px";
    IDelement.style.border = "2.2px solid #FA573C";
}
function unSetBorder(IDelement){
    IDelement = document.getElementById(IDelement);
    IDelement.style.transition = "0s";
    IDelement.style.borderRadius = "0";
    IDelement.style.border = "2.2px solid rgba(0, 0, 0, 0)";
}

inputNum.onkeyup = function write() {
    var string_length =  inputNum.value.length;
//Get numbers from string -> input.value and insert to span[id=number + i]
    var string_numbers = [];
    var backspace_cod = 8;

    if(event.keyCode == backspace_cod)
        deleteSpan.innerHTML = "#";

        for(var i=0; i<string_length; i++)
            {
                string_numbers[i] = inputNum.value[i];
                var span_number = document.getElementById("number" + (i));
                    span_number.innerHTML = string_numbers[i];
                deleteSpan = span_number;
            }
       
}

card_holder.onkeyup = function writeName(){
    var name = document.getElementById("nameParagraph");
    if(name.innerHTML == "")
        name.innerHTML = "Card Holder Name";
    else
        name.innerHTML = card_holder.value;
}

function replace_month_year(IDselect, IDspan){
    var  select = document.getElementById(IDselect).selectedIndex;
    var options = document.getElementById(IDselect).options;
    var    span = document.getElementById(IDspan);
    span.innerHTML = options[select].value;
}

//__________________________________________________________________________________________
// FUNCTIONS 
//     1) rotate card and write on input_cw
//     2) card_from_rotate_to_initial_state

function rotate_card_write_to_input(){
    var card = document.getElementById("card");
    
//Hide Elements
    var hideElements = document.getElementsByClassName("hide");
    for(var i=0; i<hideElements.length; i++){
        hideElements[i].style.display = "none";
    }

//Rotate div.class = "card"
    card.style.transition = "2s";
    card.style.transform = "rotate3d(0, 1, 0, 190deg)";
    card.style.height = "30vw";
    card.style.backgroundImage = 'url("img/card_reverse.jpg")';
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";  

//Stergerea input cw suplimenentare, ca sa ramane numai unul    
    if( CW_input_number == 0){
        input_cw = document.createElement("input");
        input_cw.setAttribute("type","text");
        
        input_cw.style.transform = "rotateY(180deg)";
        input_cw.style.unicodeBidi = "bidi-override";
        input_cw.style.direction = "rtl";
        
        card.appendChild(input_cw);
        CW_input_number = 1;
    }
}

function cw_write(){
    var card_number = document.getElementById("card_number");
    input_cw.value = card_number.value.split("").reverse().join("");
}

function card_from_rotate_to_initial_state(){
    if(CW_input_number == 1){
        var card = document.getElementById("card");
        card.style.backgroundImage = 'url("img/card.jpg")';
        card.style.display = "block";
        card.style.transform = "translate(0px,-100px)";
        card.style.height = "inherit";
    //Remove input_cw
        input_cw.remove();
        CW_input_number = 0;
    //Show Elements
        var hideElements = document.getElementsByClassName("hide");
        for(var i=0; i<hideElements.length; i++){
            hideElements[i].style.display = "block";
        }
    }
}