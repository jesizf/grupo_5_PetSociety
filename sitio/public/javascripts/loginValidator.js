console.log('loginValidator success');

const $ = id => document.getElementById(id);

const formulario = $('form-login');
const inputEmail = $('email');
const inputPassword = $('password');


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
        case this.value.length === 0:
            $('error-email').innerText= 'Se requiere el email';
            this.classList.add('is-invalid');
            break;
        default:
            $('error-email').innerText = '';
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})


/* password */

inputPassword.addEventListener('focus', function() {
    $('info-password').innerText = "Ingresá la contraseña "
    $('error-password').innerText = null;
    this.classList.remove('is-invalid');
})
inputPassword.addEventListener('keydown', function() {
    $('info-password').innerText = null;
})

inputPassword.addEventListener('blur', function() {
    switch (true) {
        case this.value.length === 0:
            $('error-password').innerText = 'Es necesaria una contraseña';
            this.classList.add('is-invalid');
            break;
        default:
            $('error-password').innerText = '';
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault() 
    if( 
        !email.classList.add('is-invalid') ||
        !password.classList.add('is-invalid')
        ) {
        $('error-empty').innerText ="hay un error, por favor revise los campos incorrectos"
    error = true
    }
    if(error){
        formulario.submit()
    }

})