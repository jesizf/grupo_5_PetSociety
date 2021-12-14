console.log('secess menu.js');


let menu = document.getElementById('menu');
let logo = document.getElementById('menu-burger');

// mostrar un menu oculto
logo.addEventListener('click', (e) =>{
    e.preventDefault()
    menu.classList.toggle('mostrar')
})

// para que desaparesca solo


menu.addEventListener('click', () =>{
    menu.classList.toggle('mostrar')
})

