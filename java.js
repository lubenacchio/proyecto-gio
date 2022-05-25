


// VALIDACION DE FORMULARIO

$(document).ready(function(){
    $("carta").hide();
    getLocation();
    validador();
    animales();


})  


    function getLocation() {
        let lon
        let lat

        let temperaturaValor = document.getElementById('temperatura-valor')
        let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

        let ubicacion = document.getElementById('ubicacion')
        let iconoAnimado = document.getElementById('icono-animado')

        let vientoVelocidad = document.getElementById('viento-velocidad')

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(posicion =>{
                console.log(posicion.coords.latitude)
                lon = posicion.coords.longitude
                lat = posicion.coords.latitude

                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a28ef99838bcc7263ea32ca40fbaf94a`
                
                fetch(url)
                .then( response => { return response.json() })
                .then( data => {

                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`


                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name
                    
                    vientoVelocidad.textContent = `${data.wind.speed} m/s`
                    
                /* console.log(data.weather[0].icon)
                    let iconCode = data.weather[0].icon
                    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`
                    console.log(urlIcon)
                    */
                console.log(data.weather[0].main)
                switch(data.weather[0].main){
                    case 'clear':
                        iconoAnimado.src = 'animated/day.svg'
                        console.log(`LIMPIO`)
                        break;
                    case 'clouds':
                        iconoAnimado.src = 'animated/cloudy-day-1.svg'
                        console.log(`NUBES`)
                        break;
                    case 'Thunderstorm':
                        iconoAnimado.src = 'animated/thunder.svg'
                        console.log(`TORMENTA`)
                        break;
                    case 'Drizzle':
                        iconoAnimado.src = 'animated/rainy-2.svg'
                        console.log(`LLOVIZNA`)
                        break;
                    case 'Rain':
                        iconoAnimado.src = 'animated/rainy-7.svg'
                        console.log(`LLUVIA`)
                        break;
                    case 'Snow':
                        iconoAnimado.src = 'animated/snowy-6.svg'
                        console.log(`NIEVE`)
                        break;
                    case 'Atmosphere':
                        iconoAnimado.src = 'animated/weather.svg'
                        console.log(`ATMOSFERA`)
                        break;
                    default:
                        iconoAnimado.src = 'animated/cloudy-day-1.svg'
                        console.log('por defecto')    
                }
                })
                .catch( error =>{
                    console.log(error)
                })
            })
    
        }};

    function animales (){
        const dog_btn = document.getElementById('dog_btn');
        const dog_result = document.getElementById('dog_result');

        dog_btn.addEventListener('click', getRandomDog);

        function getRandomDog() {
            fetch('https://random.dog/woof.json')
                .then(res => res.json())
                .then(data => {
                    if(data.url.includes('.mp4')) {
                        getRandomDog();
                    }
                    else {
                        dog_result.innerHTML = `<img src=${data.url}  />`;
                    }
		});
        }

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
            if ($("#txtNumeroTelefono").val().trim().length == 3) {
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
        $("#txtrut").focusout(function(){
            if ($("#txtrut").val().trim().length == 0) {
                mensaje = "Debe ingresar un rut";
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
                mensaje = "Debe ingresar una contraseña";
                $('#alerta').html(mensaje);
                $('#alerta').show();
            }else{
                $('#alerta').hide();
            }
        });
        $("#txtConfirmPassword").focusout(function(){
            clave = ('#txtPassword').val();
            clave2 = ('#txtConfirmPassword').val();
            if(clave != clave2){
                mensaje = "Las contrasenas deben coincidir";
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
            if ($("#txtNumeroTelefono").val().trim().length == 0 || $("#txtNumeroTelefono").val().trim().length>11) {
                alert("debe ingresar un numero de telefono valido")
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
            if ($("#txtcomuna").val().trim() == 0) {
                alert("debe ingresar una comuna")
                event.preventDefault();
            }
        });
        $("#formularioForm").submit(function(){
            if ($("#txtPassword").val().trim() == 0) {
                alert("debe ingresar una contraseña")
                event.preventDefault();
            }
        });
        $("#formularioForm").submit(function(){
            if ($("#txtConfirmPassword").val().trim() == 0) {
                alert("debe confirmar contarseña")
                event.preventDefault();
            }
        });
        $("#formularioForm").submit(function(){
            clave = ('#txtPassword').val();
            clave2 = ('#txtConfirmPassword').val();
            if(clave !== clave2){
                alert("Las claves deben coincidir")
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
    };
