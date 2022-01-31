var name_local_storage_array = "dresses_array_card";
var dresses = [];
    dresses = JSON.parse(localStorage.getItem(name_local_storage_array));
    
function get_dresses(){
    let div_list_dresses = document.getElementById("list_dresses");
    let sum = 0, count = 0;

    for(let i=0; i < dresses.length; i++){
        let main = document.createElement("main");
            main.classList.add("dress");
            main.classList.add("display-flex");
            main.classList.add("justify-space-between");
            main.setAttribute("id","dress_"+i);
//Primul div - > inserarea imaginii
// ================================================================================
        let first_div = document.createElement("div");
            first_div.classList.add("display-flex");
            first_div.classList.add("dress_first_div");

        let img = document.createElement("img");
            img.src = dresses[i][0];
        first_div.appendChild(img);
//Primul div - > crearea div[class=dress_info] si adaugarea h2 cu text
// ================================================================================
        let div_dress_info = document.createElement("div");
            div_dress_info.classList.add("dress_info");

        create_h2(dresses[i][2], "", div_dress_info);
        create_h2(dresses[i][1], "Categorie:", div_dress_info);
        create_h2(dresses[i][4], "Marime:", div_dress_info);   
        create_h2(dresses[i][5], "Culoare:", div_dress_info);
//================================================================================
        create_h3_with_svg("close", "Ștergere", div_dress_info, i, 'list_dresses');
//Al doilea div quantity
//================================================================================
        let div_main_quantity = document.createElement("div");
        let div_quantity = document.createElement("div");
            div_quantity.classList.add("display-flex");
            div_quantity.classList.add("quantity");
            div_quantity.style.marginBottom = "1.3vh";

        let button_minus = document.createElement("button");
            button_minus.innerHTML = "-";
            button_minus.setAttribute("onclick","operation('minus', 'quantity_"+i+"',"+i+")");

        let button_plus = document.createElement("button");
            button_plus.innerHTML = "+";
            button_plus.setAttribute("onclick","operation('plus', 'quantity_"+i+"',"+i+")");

        let input = document.createElement("input");
            input.setAttribute("value", dresses[i][6]);
            input.setAttribute("type","text");
            input.setAttribute("id","quantity_"+i);
            input.setAttribute("readonly","true");


        div_quantity.appendChild(button_minus);
        div_quantity.appendChild(input);
        div_quantity.appendChild(button_plus);

        div_main_quantity.appendChild(div_quantity);
//================================================================================
        let h2_pret = document.createElement("h2");
            h2_pret.innerHTML = dresses[i][3];
            h2_pret.setAttribute("class","pret");

        let h2_total = document.createElement("h2");
            h2_total.innerHTML = Math.round(( parseFloat(dresses[i][3])*dresses[i][6] ) )+" Lei";
            h2_total.setAttribute("class","total");
//================================================================================
        first_div.appendChild(div_dress_info);
        main.appendChild(first_div);
        main.appendChild(div_main_quantity);
        main.appendChild(h2_pret);
        main.appendChild(h2_total);
        div_list_dresses.appendChild(main);

        sum += parseFloat(h2_total.innerHTML);
    }
    set_total_price(sum);
}
function create_h2(innerText, span_text, element_to_append){
    let b = document.createElement("b");
        b.innerHTML = span_text;
    let h2 = document.createElement("h2");
        h2.innerHTML = innerText;
        h2.appendChild(b);
        h2.style.display = "flex";
        h2.style.flexDirection = "row-reverse";
        h2.style.justifyContent = "flex-end";
    element_to_append.appendChild(h2);
}
function create_h3_with_svg(id_original_svg, innerText, element_to_append, i, list_section){
    let svg = document.getElementById(id_original_svg);
    let svg_clone = svg.cloneNode(true);
    let h3 = document.createElement("h3");
        h3.innerText = innerText;
        h3.style.display = "flex";
        h3.style.flexDirection = "row-reverse";
        h3.style.justifyContent = "flex-end";
        h3.appendChild(svg_clone);

    console.log(i);

    if(id_original_svg == 'close')
         h3.setAttribute("onclick", "delete_dress('dress_"+i+"',"+i+",'"+list_section+"', '"+name_local_storage_array+"')");
        
    element_to_append.appendChild(h3);
}


// ===========================================================================================
let dresses_wish_list = [];

function add_to_wish_list_Dress(index_dress, list_section){
    let Dress = [];
    let length_dress = dresses[0].length;
        
    for(let j = 0; j < length_dress; j++)
        Dress.push(dresses[index_dress][j]);
    
    let id_dressDelete = "dress_"+index_dress;
    delete_dress(id_dressDelete, index_dress, list_section, name_local_storage_array);
// ============================================================================================   
    dresses_wish_list = JSON.parse(localStorage.getItem('dresses_array_wish_list'));        
    if(dresses_wish_list == null)
        dresses_wish_list = [];
    
    dresses_wish_list.push(Dress);
    localStorage.setItem('dresses_array_wish_list',JSON.stringify(dresses_wish_list));
    
    console.log(index_dress + " "+ list_section);
    alert('Rochia a fost adaugată in lista de dorințe!');
}

function edit_details(index_dress, list_section){
    let id_dressDelete = "dress_"+index_dress;
    let dress_url = dresses[index_dress][11];
    delete_dress(id_dressDelete, index_dress, list_section, name_local_storage_array);
    goToPage(dress_url);
}

// =================================================================================
function set_total_price(sum){
    if(sum < 1)
        return;

    let Total_price = document.getElementsByClassName("Total_price");
    for (let i = 0; i < Total_price.length; i++) 
        Total_price[i].innerHTML = sum;
}
//===============================================================================================


var preview_products = document.getElementsByClassName("preview_products")[0];
function show_poUP_menu(){
    if(preview_products.style.display == "none")
        preview_products.style.display = "block";
    else
        preview_products.style.display = "none";
}



//===============================================================================================
let totalPrice = 0;
function get_dresses_to_popUP_menu(){
    let preview_products =document.getElementById("preview_products");
    let number_products = document.getElementById("number_products");
        number_products.innerHTML = dresses.length;
    
    for(let i=0; i < dresses.length; i++){
        let li = document.createElement("li");
            li.classList.add("product");
            li.classList.add("display-flex");
            li.setAttribute("id","Dress___"+i);
        
        let main = document.createElement("main");
            main.classList.add("display-flex");
        
        let img = document.createElement("img");
            img.src = dresses[i][0];
        
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
            h1.innerHTML = dresses[i][2];
        
        div.appendChild(h1);
        create_h2_with_span("Categorie:", dresses[i][1],div);
        create_h2_with_span("Marime:", dresses[i][4],div);
        create_h2_with_span("Color:", dresses[i][5],div);

        let div2 = document.createElement("div");
        let svg = document.getElementById("close");
        let svg_clone = svg.cloneNode(true);
            svg_clone.setAttribute("onclick","delete_dress('Dress___"+i+"', "+i+", 'preview_products', '"+name_local_storage_array+"')");

        let h2 = document.createElement("h2");
            h2.classList.add("font-famiy-Oswald");
            h2.innerHTML = dresses[i][3];

        totalPrice += parseFloat(dresses[i][3]);

        div2.appendChild(svg_clone);
        div2.appendChild(h2);

        main.appendChild(img);
        main.appendChild(div);
        li.appendChild(main);
        li.appendChild(div2);
        preview_products.appendChild(li);
    }
    set_total_price(totalPrice);
}
function create_h2_with_span(span_text, h2_text, element_to_append){
    let h2 = document.createElement("h2");
        h2.innerHTML = h2_text;
        h2.style.display = "flex";
        h2.style.flexDirection = "row-reverse";
        h2.style.justifyContent = "flex-end"; 
    let span = document.createElement("span");
        span.innerHTML = span_text;
        span.classList.add("lightgray");
    h2.appendChild(span);
    element_to_append.appendChild(h2);
}
// ====================================================================================
function delete_dress(id_dressDelete, index_dress, list_section, nameDB){
    console.log(id_dressDelete);
    localStorage.removeItem(nameDB);
    dresses.splice(index_dress,1);
    
    let div_parent = document.getElementById(list_section);
    let dressDel = document.getElementById(id_dressDelete);
        div_parent.removeChild(dressDel);

    localStorage.setItem(nameDB,JSON.stringify(dresses));
}
// =====================================================================================
function operation(operation, id_input, index_dress){
    let input = document.getElementById(id_input);

    let h2_pret = document.getElementsByClassName("pret");
    let h2_pret_value = parseFloat(h2_pret[index_dress].innerHTML);

    let h2_total = document.getElementsByClassName("total");
    let h2_total_value = parseFloat(h2_total[index_dress].innerHTML);

    let initial_total_price = document.getElementsByClassName("Total_price")[0];
        initial_total_price = parseFloat(initial_total_price.innerHTML);

    if(input.value < 1){
        input.value = 2;
        h2_total[index_dress].innerHTML = (h2_pret_value + h2_pret_value)+" Lei";
        
        let sum = 0;
        for (let i = 0; i < h2_total.length; i++) 
            sum += parseFloat(h2_total[i].innerHTML); 
            
        set_total_price(Math.round(sum) );
        dresses[index_dress][9] = input.value;
        localStorage.setItem(name_local_storage_array,JSON.stringify(dresses));
        return;
    }

    if(operation == "minus"){
        input.value--;
        h2_total[index_dress].innerHTML = Math.round( (h2_total_value - h2_pret_value) )+" Lei" ;
        initial_total_price -= h2_pret_value;
    } else {  
        input.value++;
        h2_total[index_dress].innerHTML = Math.round( (h2_total_value + h2_pret_value) )+" Lei" ;
        initial_total_price += h2_pret_value;
    }
    set_total_price(Math.round(initial_total_price) );
    dresses[index_dress][6] = input.value;
        
    localStorage.removeItem(name_local_storage_array);
    localStorage.setItem(name_local_storage_array,JSON.stringify(dresses));  
}