// VALIDACION DE FORMULARIO
$(document).ready(
    
    function(){

        var mensaje="";

        $("#alerta").hide();

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
            if ($("#txtCiudad").val().trim().length == 0) {
                alert("debe ingresar una ciudad")
            }
        });

        $("#formularioForm").submit(function(){
            if ($("#txtcomuna").val().trim() == 0) {
                alert("debe ingresar una comuna")
                event.preventDefault();
            }
        });
        $("#formularioForm").submit(function(){
            if ($("#txtCodigoPostal").val().trim().length == 0) {
                alert("debe ingresar un codigo postal")
                event.preventDefault();
            }
        });
        $("#formularioForm").submit(function(){
            if ($("#txtPassword").val().trim().length == 0) {
                alert("debe ingresar una contraseña")
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
        



        $('#formularioForm').submit(function() {

            var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        
            if (regex.test($('#txtEmail').val().trim())) {
                $("#msgerror").html("El rut ingresado es válido :D").hide();
        
            } else {
                alert("debe ingresar un mail valido")
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

    });


