console.log('cart.js sucess');

const $ = id => document.getElementById(id);

let spanCantidad = document.querySelector('span.badge');; //cantidad de productos en el icono del carrito
let changuito = $('lista-carrito div');
let spanTotal =  document.getElementById('total-total'); //h4 el valor total 
let cartHead = document.getElementById('encabezado'); //encabezado 
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
        spanTotal.innerHTML = `<h4>${total}</h4>`;
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





const getCarrito = async () => {
    try {
        let response = await fetch('/api/carts/show')
        let result = await response.json()
      
   
        if(result.data > 0) {
            mostrarCantidad(result.data)
            //cargarTabla(result.data)

        }else{
            mostrarCantidad(result.data)
           
        }
    } catch (error) {
        console.log(error)
    }
}


// addItem viene de la vista detail
const addItem = async (event,id) => { //recibe el evento y el id
    event.preventDefault()
    try {
        let response = await fetch('/api/carts/add/' + id) //hace una consulta a la base de datos y le paso el id
        let result = await response.json()
        console.log(result);
        mostrarCantidad(result.data);
        //cargarTabla(result.data);

    } catch (error) {
        console.log(error)
    }
}

getCarrito();



