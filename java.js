


// VALIDACION DE FORMULARIO

$(document).ready(function(){
    $("carta").hide();
    getLocation();
    validador();
    cargarAnimales();
})  


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.warn("Geolocation is not supported by this browser.");
    }
    }

    function showPosition(position) {
       var urlBase = "https://www.metaweather.com/api"

       $.get(urlBase+`/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`,function(data){

           $.get(urlBase+`/api/location/${data[0].woeid}/`,function(data){

               $("#titulo").append(data.title)
               $("#pais").append(data.parent.title)
               $("#tempClima").append(data.consolidated_weather[0].the_temp+"°C")
               $("#imagenClima").attr("src",`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`);
               $("#carta").show();

           })
       })

    }
    


    function validador(){

        var mensaje="";

        $("#alerta").hide();
        

        $("#txtNombre").focusout(function(){
            if ($("#txtNombre").val().trim().length == 0) {
                mensaje = "Debe ingresar un nombre";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });

        $("#txtApellido").focusout(function(){
            if ($("#txtApellido").val().trim().length == 0) {
                mensaje = "Debe ingresar un apellido";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });
        $("#txtNumeroTelefono").focusout(function(){
            if ($("#txtNumeroTelefono").val().trim().length == 0) {
                mensaje = "Debe ingresar un numero de telefono";
                $('#alerta').html(mensaje);
            }else{
                $('#alerta').hide();
            }
        });
        $("#txtEmail").focusout(function(){
            if ($("#txtEmail").val().trim().length == 0) {
                mensaje = "Debe ingresar un mail";
                $('#alerta').html(mensaje);
            }else{
                $('#alerta').hide();
            }
        });

        $("#txtCiudad").focusout(function(){
            if ($("#txtCiudad").val().trim().length == 0) {
                mensaje = "Debe ingresar una ciudad";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });

        $("#txtcomuna").focusout(function(){
            if ($("#txtcomuna").val().trim() == 0) {
                mensaje = "Debe seleccionar una comuna";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });
        $("#txtCodigoPostal").focusout(function(){
            if ($("#txtCodigoPostal").val().trim().length == 0) {
                mensaje = "Debe ingresar un codigo postal";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });
        $("#txtPassword").focusout(function(){
            if ($("#txtPassword").val().trim().length == 0) {
                mensaje = "Debe ingresar una contrasena";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });





        $("#formularioForm").submit(function(){
            if ($("#txtNombre").val().trim().length == 0) {
                alert("debe ingresar el nombre")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#txtApellido").val().trim().length == 0) {
                alert("debe ingresar el apellido")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#txtNumeroTelefono").val().trim().length == 0) {
                alert("debe ingresar un numero de telefono")
                event.preventDefault();
            }
        });

        $("#formularioForm").submit(function() {

            var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        
            if (regex.test($('#txtEmail').val().trim())) {
                $("#msgerror").html("El rut ingresado es válido :D").hide();
        
            } else {
                alert("debe ingresar un mail valido")
                event.preventDefault();
            }
        });

        var Fn = {
            // Valida el rut con su cadena completa "XXXXXXXX-X"
            validaRut : function (rutCompleto) {
                rutCompleto = rutCompleto.replace("‐","-");
                if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                    return false;
                var tmp 	= rutCompleto.split('-');
                var digv	= tmp[1]; 
                var rut 	= tmp[0];
                if ( digv == 'K' ) digv = 'k' ;
                
                return (Fn.dv(rut) == digv );
            },
            dv : function(T){
                var M=0,S=1;
                for(;T;T=Math.floor(T/10))
                    S=(S+T%10*(9-M++%6))%11;
                return S?S-1:'k';
            }
        }


        
        
        $("#formularioForm").submit(function(){
            if (Fn.validaRut( $("#txtrut").val() )){
                $("#msgerror").html("El rut ingresado es válido :D").hide();
            } else {
                alert("debe ingresar un rut valido")
                event.preventDefault();
            }
        });
        

        $("#formularioForm").submit(function(){
            if ($("#txtCiudad").val().trim().length == 0) {
                alert("debe ingresar una ciudad")
                event.preventDefault();
            }
        });
        $("#formularioForm").submit(function(){
            if ($("##txtCodigoPostal").val().trim().length == 0) {
                alert("debe ingresar un codigo postal")
                event.preventDefault();
            }
        });
        

        $("#formularioForm").submit(function(){
            if ($("#txtcomuna").val()==0) {
                alert("debe ingresar una comnuna")
                event.preventDefault();
            }
        });







        $('#txtPassword').keyup(function () {
            $('#strengthMessage').html(checkStrength($('#txtPassword').val()))
        })



        function checkStrength(password) {
            var strength = 0
            if (password.length < 6) {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Short')
                return 'demasiado corta'
            }
            if (password.length > 7) strength += 1
            // If password contains both lower and uppercase characters, increase strength value.
            if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
            // If it has numbers and characters, increase strength value.
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
            // If it has one special character, increase strength value.
            if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
            // If it has two special characters, increase strength value.
            if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
            // Calculated strength value, we can return messages
            // If value is less than 2
            if (strength < 2) {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Weak')
                return 'Debil'
            } else if (strength == 2) {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Good')
                return 'Buena'
            } else {
                $('#strengthMessage').removeClass()
                $('#strengthMessage').addClass('Strong')
                return 'Fuerte'
            }
        }

        $('.error').hide();
        $("#formularioForm").submit(function(){
            clave = ('#txtPassword').val();
            clave2 = ('#txtConfirmPassword').val();
            if(clave !== clave2){
                alert("Las claves deben coincidir")
                event.preventDefault();
            }
        })
    };

    function cargarAnimales(){
        urlBaseAnimales = "https://zoo-animal-api.herokuapp.com/animals/rand/10";
        $.get(urlBaseAnimales,function(data){
            // console.log(data.results);
            $.each(data.results,function(i,elemento){
                // console.log(elemento);
                $.get(elemento.url,function(dataAnimales){
                    console.log(dataAnimales);
                    $("#MisCartas").append(` <div id="${dataAnimales.id}" class="card">
                      
                        <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="${dataAnimales.sprites.other["official-artwork"].front_default}" alt="Placeholder image">
                            </figure>
                            </div>
                            <div class="media-content">
                            <p class="title is-4">${dataAnimales.name}-${dataAnimales.id}</p>
                            <p class="subtitle is-6">Tipo: ${dataAnimales.types[0].type.name}</p>
                            </div>
                        </div>
                    
                        <div class="content">
                           Experiencia Base:  ${dataAnimales.base_experience}
                        </div>
                        </div>`);

                        $(`#${dataAnimales.id}`).css('textTransform', 'capitalize');
                        $.each(dataAnimales.types,function(i,tipo){
                            console.log(tipo);
                        })
                })
            })
        });
    }

