var next_count = 0;

function prev(num, display_property){
    images[next_count].style.display = display_property;
    next_count--;

    if(next_count < 0) next_count = 0;
}

function next(num, display_property){
    images[next_count].style.display = "none";
    next_count++;
    if(next_count == num){
        next_count = 0;
        for (let i = 0; i < images.length; i++) 
            images[i].style.display = display_property;
    }
}