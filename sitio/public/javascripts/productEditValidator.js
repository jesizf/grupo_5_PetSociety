console.log('productEdit.js success');

const preview = document.getElementById('preview');

const formulario = $('form-product-edit');
const nameProduct = $('name-product');
const price = $('price');
const description = $('description');
const category = $('option-category');
const weigh = $('option-weigh');
const image = $('image');
const oneMB = 1048576;
const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;




const showPreview = array => {
    preview.innerHTML = null;
    array.forEach(image => {
        preview.innerHTML += `
        <div class="col-4 text-center" >
            <img width="200" src="/images/products/${image.file}" alt="">
            <div >
                <a onclick="deleteImage('${image.id}')" class="btn btn-danger ">Eliminar</a>
            </div>
        </div>
        `
    })
    return false
}


const deleteImage = async id => {
    try {
        let response = await fetch('/api/delete-image/' + id, {
            method: 'POST',
        })
        let result = await response.json()
        showPreview(result.images)
    } catch (error) {
        console.log(error)
    }
}

const addImage = async (id,files) => {
    let data = new FormData()
    for (const file of files) {
        data.append('images',file,file.name)
    }
    console.log(data)

    try {
        let response = await fetch('/api/add-images/' + id, {
            method: 'POST',
            body : data,
        })
        let result = await response.json()
        showPreview(result.images)
    } catch (error) {
        
    }
}

nameProduct.addEventListener('focus', function(){
    $('error-product-name').innerText ='Debe tener al menos 5 caracteres';
    
    
})

nameProduct.addEventListener('keydown', function() {
    $('error-product-name').innerText = null;
    this.classList.remove('is-invalid');
})

nameProduct.addEventListener('blur', function() {
    switch (true) {
        case !this.value:
            $('error-name').innerText ='Obligatorio';
            this.classList.add('is-invalid'); // crear la clase y cambiar
            break;
    
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid'); // sacar el invalido
            this.classList.add('is-valid'); //cambiar yh crear el clase valido
            break;
    }
}
)

// Precio del producto
price.addEventListener('focus', function(){
    $('error-product-price').innerText ='Obligatorio';
    
})

price.addEventListener('keydown', function() {
    
    $('error-product-price').innerText = null;
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
})

price.addEventListener('blur', function() {
    switch (true) {
        case !this.value:
            $('error-price').innerText ='Ingrese un número válido';
            this.classList.add('is-invalid'); // crear la clase y cambiar
            break;
    
        default:
            $('error-price').innerText = null;
            this.classList.remove('is-invalid'); // sacar el invalido
            this.classList.add('is-valid'); //cambiar yh crear el clase valido
            break;
    }
    
}
)

//Sect Category

category.addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            $('error-category').innerText ='Debe elegir una categoría';
            this.classList.add('is-invalid'); // crear la clase y cambiar
            break;
    
        default:
            $('error-category').innerText = null;
            this.classList.remove('is-invalid'); // sacar el invalido
            this.classList.add('is-valid'); //cambiar yh crear el clase valido
            break;
    }
})

//Sect Weigh
weigh.addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            $('error-weigh').innerText ='Debe elegir un peso';
            this.classList.add('is-invalid'); // crear la clase y cambiar
            break;
    
        default:
            $('error-weigh').innerText = null;
            this.classList.remove('is-invalid'); // sacar el invalido
            this.classList.add('is-valid'); //cambiar yh crear el clase valido
            break;
    }
})

// Descripcion del producto
description.addEventListener('focus', function(){
    $('error-product-description').innerText ='Obligatorio';
    
})

description.addEventListener('keydown', function() {
    
    $('error-product-description').innerText = null;
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
})

description.addEventListener('blur', function() {
    switch (true) {
        case !this.value:
            $('error-description').innerText ='Debe tener al menos 20 caracteres';
            this.classList.add('is-invalid'); // crear la clase y cambiar
            break;
    
        default:
            $('error-description').innerText = null;
            this.classList.remove('is-invalid'); // sacar el invalido
            this.classList.add('is-valid'); //cambiar yh crear el clase valido
            break;
    }
    
}
)


image.addEventListener('change', function (e) {
    switch (true) {
        case !regExExt.exec(this.value): // si esto da false largame este mensaje
            $('imageError').innerHTML = "Solo imágenes con extensión jpg, jpeg, png, gif, webp"
        
            this.classList.add('is-invalid')
            preview.innerHTML = null;
            break;
       
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('btnImagen').classList.add('btn-outline-secondary');
            $('btnImagen').classList.remove('btn-outline-danger');
            imageError.innerHTML = null;
            btnImagen.innerText = "Cambiar imágenes"
            if (this.files) {
                [].forEach.call(this.files, readAndPreview); //si hay muchas img las recorro y ejecuto el metodo
            }

            function readAndPreview(file) {

                var reader = new FileReader();
                preview.innerHTML = null;
                reader.addEventListener("load", function () {
                    var image = new Image();
                    image.height = 150;
                    image.title = file.name;
                    image.src = this.result;
                    preview.appendChild(image);
                });
                reader.readAsDataURL(file);

            }
            break;
    }
})


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let error = false;
    for (let i = 0; i < this.elements.length - 3; i++) {
        if(this.elements[i].classList.contains('is-invalid') || !this.elements[i].value){
            error = true
            this.elements[i].classList.add('is-invalid');
            $('validation-campos').innerHTML = 'Los campos señanalados son obligatorios';
            error = true; 
           
        }
    }
    !error && this.submit();
})
