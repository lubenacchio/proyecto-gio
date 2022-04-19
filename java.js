
// STICKY TOP
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky")
    }
}

window.onscroll = function() {myFunction()};

// busqueda menu

function muestra_oculta(id){
    if(document.getElementById){
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function(){
    muestra_oculta('caja');
}