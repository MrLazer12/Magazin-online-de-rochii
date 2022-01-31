function add_dress(name_local_storage_array, index_Clothes){
    var dresses_array = [];
    console.log(name_local_storage_array+" -> typeof: "+ typeof name_local_storage_array);
    if(localStorage.getItem(name_local_storage_array) == null)
        localStorage.setItem(name_local_storage_array, JSON.stringify(dresses_array));
        
    dresses_array = JSON.parse(localStorage.getItem(name_local_storage_array));
// =========================================================================================
    let clothes = document.getElementsByClassName("dress")[index_Clothes];
    let img = clothes.style.backgroundImage.slice(4, -1).replace(/"/g, "");;
    let category = clothes.querySelector(".dress > div:first-of-type > h2");
        category = category.innerHTML;
// =========================================================================================
    let name = clothes.querySelector(".dress > div:nth-child(2) > h3:first-of-type");
        name = name.innerHTML;
    for (let i = 0; i < dresses_array.length; i++) 
        if(dresses_array[i][2] == name){
            alert("Deja a-ti selectat produsul dat!");
            return;
        }
// =========================================================================================
    let price = clothes.querySelector(".dress .price");
        price = price.innerHTML;
// ====================================================================================
    let marimea_selectata = clothes.querySelectorAll(".dress .size_info .marimea_selectat");
    let marimi = '';
    for (let i = 0; i < marimea_selectata.length; i++)
       marimi += marimea_selectata[i].innerHTML+", ";
// ====================================================================================
    let color = clothes.querySelector(".dress .dress_color div");
        color = color.getAttribute("value");   
// ====================================================================================
    let dress = [];
    dress.push( img, category, name, price, marimi, color, "1" );
// ====================================================================================   
    dresses_array.push(dress);
    console.log(dresses_array);
    localStorage.setItem(name_local_storage_array, JSON.stringify(dresses_array));

    alert("Produsul a fost adugat in cos!");
    window.location.reload();
}