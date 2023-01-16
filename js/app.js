const footer = document.querySelector('.footer') /* Etiqueta footer */
const btnFlotante = document.querySelector('.btn-flotante') /* Boton contato */

btnFlotante.addEventListener('click', function() {
    /* La clase de css se llama  */

    if(footer.classList.contains('activo')){
        /* Quita la etiqueta de footer */
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo')
        btnFlotante.textContent = "Contacto"
    } else {
        /* Agrega la etiqueta de footer */
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
        btnFlotante.textContent = "X Cerrar"
    }

})