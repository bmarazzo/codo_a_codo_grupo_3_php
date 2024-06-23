
import { API_SERVER, API_SERVER2 } from "./constantes.js";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form-pelicula');
    if (form) {
        form.setAttribute('action', `${API_SERVER}/index.php`);
    }


    const form2 = document.getElementById('form-buscar');
    if (form2) {
        form2.setAttribute('action', `${API_SERVER}/index.php`);
    }




});