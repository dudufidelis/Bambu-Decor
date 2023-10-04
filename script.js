let menu = document.querySelector(".menu")
let nav = document.querySelector(".links")

menu.addEventListener( "click", () => {
    nav.classList.toggle("open");
}) 


//Slider

let count = 1
document.getElementById("radio1").checked = true;
    
setInterval( function() {
    nextImage()
}, 5000)

function nextImage (){
    count++;
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}