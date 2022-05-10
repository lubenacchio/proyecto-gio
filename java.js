// VALIDACION DE FORMULARIO

$(document).ready(
    function(){

        var mensaje="";

        $("#alerta").hide();

        $("#nombre").focusout(function(){
            if ($("#nombre").val().trim().length == 0) {
                alert("debe ingresar el nombre")

                mensaje = "debe ingresar un nombre";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });

        $("#apellido").focusout(function(){
            if ($("#apellido").val().trim().length == 0) {
                alert("debe ingresar el nombre")

                mensaje = "debe ingresar un apellido";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });

        $("#nombreUsuario").focusout(function(){
            if ($("#nombreUsuario").val().trim().length == 0) {
                alert("debe ingresar el nombre de usuario")

                mensaje = "debe ingresar un nombre de usuario";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });

        $("#mail").focusout(function(){
            if ($("#mail").val().trim().length == 0) {
                alert("debe ingresar el mail")

                mensaje = "debe ingresar un mail";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });

        $("#contraseña").focusout(function(){
            if ($("#contraseña").val().trim().length == 0) {
                alert("debe ingresar una contraseña")

                mensaje = "debe ingresar una contraseña";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });

        $("#ciudad").focusout(function(){
            if ($("#ciudad").val().trim().length == 0) {
                alert("debe ingresar una ciudad")

                mensaje = "debe ingresar una ciudad";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });

        $("#comuma").focusout(function(){
            if ($("#comuna").val()==0) {
                alert("debe ingresar una ciudad")

                mensaje = "debe ingresar una ciudad";
                $("#alerta").html(mensaje);
                $("#alerta").show();    
            } else {
                $("#alerta").hide();
            }
        });


        $("#formularioForm").submit(function(){
            if ($("#nombre").val().trim().length == 0) {
                alert("debe ingresar el nombre")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#apellido").val().trim().length == 0) {
                alert("debe ingresar el apellido")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#nombreUsuario").val().trim().length == 0) {
                alert("debe ingresar el nombre de usuario")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#mail").val().trim().length == 0) {
                alert("debe ingresar el mail")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#contraseña").val().trim().length == 0) {
                alert("debe ingresar una contraseña")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#ciudad").val().trim().length == 0) {
                alert("debe ingresar una ciudad")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#comuna").val()==0) {
                alert("debe ingresar una ciudad")
                event.preventDefault();
            }
        });

    });

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
