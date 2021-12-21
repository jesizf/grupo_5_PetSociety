console.log('cart.js sucess');

const $ = id => document.getElementById(id);

let spanCantidad = document.querySelector('span.badge');; //cantidad de productos en el icono del carrito
let changuito = $('lista-carrito div');
let spanTotal =  $('total'); //h4 el valor total 
let cartHead = document.getElementById('cart-head'); //encabezado 
let cartFooter = $('cart-footer')
let cartEmpty = $('cartEmpty'); //span con la leyenda: no hay productos agregados
let btnCartEmpty = $('btnCartEmpty');




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
        spanTotal.style.display = 'block';
       
      
    }else{
        cartHead.style.display = "block";
        cartFooter.style.display = 'block'
        spanTotal.style.display = 'block';
              
    }

}



const getCarrito = async () => {
    try {
        let response = await fetch('/api/carts/show')
        let result = await response.json()
          
        if(result.data.length > 0) {
            mostrarCantidad(result.data)

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

    } catch (error) {
        console.log(error)
    }
}


const removeItem = async (e,id) => {
    e.preventDefault()
    try {
        let response = await fetch('/api/carts/remove/' + id)
        let result = await response.json()
        mostrarCantidad(result.data);

    } catch (error) {
        console.log(error)
    }
}

const emptyCart = async () => {
    try {
        let response = await fetch('/api/carts/empty')
        let result = await response.json()
        changuito.innerHTML = ""
        mostrarCantidad(result.data)
    } catch (error) {
        console.log(error)
    }
}

btnCartEmpty?.addEventListener('click',() => emptyCart())

console.log("------------------------------------------------", addItem(mostrarCantidad()));
getCarrito();



