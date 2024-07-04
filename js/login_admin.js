import { API_SERVER } from "./constantes.js";

window.addEventListener('load', function() {
/***************************  para login de administrador  ****************************/
let botonEnvioLogin = document.querySelector("#btn-envio-login-admin");
let inputClaveAdmin = document.querySelector("#password");
let loginFormAdmin = document.getElementById("form-admin");

  botonEnvioLogin.addEventListener('click', function(e){
              e.preventDefault();

              console.log('DOM cargado y listo');

              if (inputClaveAdmin.value.length < 1) {
              const mensaje = new SpeechSynthesisUtterance();
              mensaje.text = "completa tucontraseña, por favor";           
              speechSynthesis.speak(mensaje);

               // Encuentra el elemento padre del campo de entrada
               const formControl = inputClaveAdmin.closest('div');
               // Encuentra el elemento de texto de error dentro del elemento padre
              const errorText = formControl.querySelector('.error-text');
            
              // Establece el texto del mensaje de error
              errorText.innerText = "La contraseña es obligatoria";

            }
    
            else if (loginFormAdmin) {
            console.log('Formulario encontrado');
           
            //event.preventDefault();
            console.log('Formulario enviado');
    
            const password = document.getElementById('password').value;
            console.log('Contraseña:', password);
    
            fetch(`${API_SERVER}/index.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'action': 'auth',
                    'password': password
                })
            })
            .then(response => {
                console.log('Respuesta recibida:', response);
                return response.text();
            })
            .then(data => {
                console.log('Respuesta del servidor recibidos: ', data);
                try {
                    //const jsonData = data;  // Intenta parsear la respuesta como JSON
                     // Limpia cualquier texto que no sea JSON
                     const jsonStartIndex = data.indexOf('{');
                     const jsonEndIndex = data.lastIndexOf('}') + 1;
                     const jsonString = data.substring(jsonStartIndex, jsonEndIndex);
                     const jsonData = JSON.parse(jsonString);  // Intenta parsear la respuesta como JSON
                     console.log('JSON data:', jsonData);

                    if (jsonData.success) {
                        alert('Autenticación exitosa');
                        window.location.href = './listados.html';
                    } else {
                        alert('Error de autenticación: ' + jsonData.message);
                    }
               
                } catch (error) {
                console.error('Error al parsear JSON: ', error);
                alert('Error en la autenticación: Respuesta inválida del servidor');
                }
            })
            .catch(error => {
                console.error('Error en la autenticación:', error);
                alert('Error en la autenticación');
            });
        
        
    } else {
        console.log('No se encontró el formulario');
    }
})
});