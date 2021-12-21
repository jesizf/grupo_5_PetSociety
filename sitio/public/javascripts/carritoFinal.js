console.log('carritoFinal.js sucess')

const dibujarCarrito = (carrito) => {
    console.log(carrito)

    carrito.forEach(product => {
        let item = `
    <article id="cart-head" class="carrito-producto">

    <div class="foto-carrito">
    <div class="box-img-cantidad">
        <img src="/img/products/${product.image}" alt="foto">
        <div class="box-cantidad-carrito">
        <a class="sacar" onClick="removeItem(event,${product.id})">-</a>
        <span class="h5">${product.cantidad}<span>
        <a class="agregar" onClick="addItem(event,${product.id})">+</a>
        </div>
        </div>
        </div>
    </div>
   
    <div class="carrito-descripcion">
        <h6>${product.nombre}</h6>
        <p class="precio-prod"><b>$${product.precio}</b></p>
    </div>
    <!--Boton de cierre-->
    <div class="cierre" id="btnCartEmpty"><a type="button" ><i class="fas fa-times-circle"></i></a></div>
    </article>
    `

    document.getElementById('listaFinal-carrito').innerHTML+=item
    });
  
  return false
}

const getCarritoFinal = async () => {
    try {
        let response = await fetch('/api/carts/show')
        let result = await response.json()

        dibujarCarrito(result.data)
    } catch (error) {
        console.log(error)
    }
}
getCarritoFinal()