console.log('registerValidator success');

const $ = id => document.getElementById(id);

const formulario = $('form-login');
const inputEmail = $('email');
const inputPassword = $('password');

/* expresiones regulares */
const regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/ 
const regExPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

/* email */

inputEmail.addEventListener('focus', function() {
    $('info-email').innerText = "Ingresá tu email"
    $('error-email').innerText = null;
    this.classList.remove('is-invalid');
})

inputEmail.addEventListener('keydown', function() {
    $('info-email').innerText = null;
})

inputEmail.addEventListener('blur', async function() {
    switch (true) {
        case !this.value :
            $('error-email').innerText = "El email es requerido";
            this.classList.add('is-invalid')
            break;
        case !regExEmail.test(this.value) :
            $('error-email').innerText = "Email inválido";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-email').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

/* password */
inputPassword.addEventListener('focus', function() {
    $('info-password').innerText = "Ingresá tu contrasña"
    $('error-password').innerText = null;
    this.classList.remove('is-invalid');
})

inputPassword.addEventListener('keydown', function() {
    $('info-password').innerText = null;
})

inputPassword.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-password').innerText = "La contraseña es requerida";
            this.classList.add('is-invalid')
            break;
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})