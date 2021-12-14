console.log('cart.js sucess');

const $ = id => document.getElementById(id);

let spanCantidad = document.querySelector('span.badge');; //cantidad de productos en el icono del carrito
let changuito = $('lista-carrito div');
let spanTotal =  $('total'); //h4 el valor total 
let cartHead = document.getElementById('cart-head'); //encabezado 
let cartFooter = $('cart-footer')
let cartEmpty = $('cart-empty'); //span con la leyenda: no hay productos agregados




const mostrarCantidad = changuito => {

    let cantidad = 0;
    let total = 0;

    if(changuito){
        changuito.forEach(item => {
            cantidad += item.cantidad
            total += item.total
        });
    }
    if(spanCantidad){
        spanCantidad.innerHTML = cantidad;
        spanTotal.innerHTML = `<span class="float-end">${total}</span>`;
    }
    

    if(cantidad == 0){
        cartHead.style.display = 'none';
        cartFooter.style.display = 'none';
        cartEmpty.style.display = 'block';
       
      
    }else{
        cartHead.style.display = "block";
        cartFooter.style.display = 'block'
        cartEmpty.style.display = 'none';          
    }

}



const cargarTabla = carrito => {
    changuito.innerHTML = ""
    carrito.forEach(producto => {
        let item = `
            <td class="col-2">
            <img class="w-100" src="/images/products/${producto.image}" id="imgProduct"> 
            </td>
            <td class="text-center col-3 align-middle">
            <a class="text-danger h5" onClick="removeItem(event,${producto.id})"><i class="fas fa-minus-square"></i></a>
            <span class="h5">${producto.cantidad}<span>
            <a class="text-success h5" onClick="addItem(event,${producto.id})"><i class="fas fa-plus-square"></i></a>
            </td>
            <td class="align-middle">
            ${producto.nombre}
            </td>
           
            <td class="align-middle">
            <span>$</span><span class="float-end">${producto.precio}</span>
            </td>
            <td class="align-middle">
            <span>$</span><span class="float-end">${producto.total}</span>
            </td>
            `;
        changuito.innerHTML += item
    });
    return false
}
const getCarrito = async () => {
    try {
        let response = await fetch('/api/carts/show')
        let result = await response.json()
       

   
        if(result.data.length > 0) {
            mostrarCantidad(result.data)
            cargarTabla(result.data)

        }else{
            mostrarCantidad(result.data)
           
        }
    } catch (error) {
        console.log(error)
    }
}


// addItem viene de la vista detail
const addItem = async (e,id) => { //recibe el evento y el adi
    e.preventDefault()
    try {
        let response = await fetch('/api/carts/add/' + id) //hace una consulta a la base de datos y le paso el id
        let result = await response.json()
        mostrarCantidad(result.data);
        cargarTabla(result.data);

    } catch (error) {
        console.log(error)
    }
}

console.log("------------------------------------------------", addItem(mostrarCantidad()));
getCarrito();



