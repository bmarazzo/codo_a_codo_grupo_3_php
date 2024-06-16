window.addEventListener('load', function() {

    /***************************  para login de administrador  ****************************/
    let botonEnvioLogin = document.querySelector("#btn-envio-login-admin");
    let inputClaveAdmin = document.querySelector("#password")
    let loginFormAdmin = document.querySelector("#form-admin");

      botonEnvioLogin.addEventListener('click', function(e){
                  e.preventDefault();
  
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
                
                else {
                loginFormAdmin.submit();
                }
      })
    
    })
  
  
  
  
  