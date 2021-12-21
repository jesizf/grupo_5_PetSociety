const db = require('../database/models');
const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`; // funcion que recibe req y devuelve el http el host y la url 

const productVerify = (carrito, id) => {
    let index = -1; // si no encuentra nada 
    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].id == id) { // si carrito en la posicion que estoy recorriendo su id = al id que estoy pasando, entonces cambia el el valor de index al numero de posicion que estoy recorriendo
            index = i;
            break // cuando esto suceda corta 
        }
    }
    return index 
}

module.exports = {
    show : async (req, res) =>{ //la info de req.session la que esta almacenada

        console.log('CARRITOOOOO', req.session.carrito)
        let response = {
            meta:{
                link : getURL(req)
            },
             data: req.session.carrito //lo que va a devolver
        }
        return res.status(200).json(response);

    },
    add : async (req, res) =>{ //agregar
        try {
            
            let product = await db.Product.findByPk(req.params.id,{ //el metodo va con el id 
                include:  ['images','category', 'weigh']
            });

            let item = {
                id: product.id,
                nombre: product.name,
                image: product.images[0].file,
                precio: +product.price,
                categoria: product.category.name,
                weigh : product.weigh.weigh,
                cantidad: 1,
                total: +product.price,
            }

            if (req.session.carrito.length == 0) { // si no hay nada

                let order = await db.Order.findOne({ //busco la orden que puede estar o no
                    where: {
                        userId: req.session.userLogin.id, // si esta logueado
                        status: 'pending' // si esta en el estado pediente 
                    }
                })
                if (!order) { // si no encuentro la orden 
                    order = await db.Order.create({ // la creo
                        userId: req.session.userLogin.id,
                        status: "pending" // la coloco automaticamente en pendiente
                    })
                }

                item = { // al item que creamos arriba 
                    ...item, //extraigo sus propiedades 
                    orderId: order.id // y le añado esta nueva propiedad, la orden a la cual pertenece la compra 
                }
                req.session.carrito.push(item) // pusheo el item

                // creo en la tabla carrito la transacción
                await db.Cart.create({
                    orderId: order.id,
                    productId: item.id,
                    userId: req.session.userLogin.id,
                    quantity: 1
                })   
   
            }else{ // si no esta vacio

                let index = productVerify(req.session.carrito,req.params.id)

                let order = await db.Order.findOne({
                    where: {
                        userId: req.session.userLogin.id,
                        status: 'pending'
                    }
                })
                if (index === -1) { //el index viene vacio? (indez == -1)
                    item = { // traigo el item
                        ...item,
                        orderId: order.id
                    }
                    req.session.carrito.push(item) // como no esta porque devolvio -1 le agrego la orden

                    // guardo los cambios en la tabla 
                    await db.Cart.create({
                        orderId: order.id,
                        productId: item.id,
                        userId: order.userId,
                        quantity: 1
                    })

                } else { // si el producto que quiero agregar ya estaba

                    let product = req.session.carrito[index]; // recupero la info del producto que recuperamos de la function productVerify

                    product.cantidad++ //la incremento en 1
                    product.total = product.cantidad * product.precio // modifico el total

                    req.session.carrito[index] = product // busco el session.carrito en la posicion que devolvio la function y se reescribe

                    //actualiza el carrito

                    await db.Cart.update(
                        {
                            quantity: product.cantidad
                        },
                        {
                            where: {
                                orderId: product.orderId,
                                productId: product.id
                            }
                        }
                    )
                }

            }
            let response = {
                meta: { // le mando una respuesta debido a que la api se esta modificando(la respuesta va a al último)
                    link: getURL(req)
                },
                data: req.session.carrito
            }
            return res.status(200).json(response) // retorname la respuesta
        } catch (error) {
           
        
        }
    },
    remove: async (req, res) => {
        try {
            let index = productVerify(req.session.carrito,req.params.id)

            let product = req.session.carrito[index]

            if(product.cantidad > 1){

                product.cantidad--
                product.total = product.cantidad * product.precio
                req.session.carrito[index] = product   

                /* disminuye la cantidad del producto seleccinado */
                await db.Cart.update(
                    {
                        quantity : product.cantidad
                    },
                    {
                        where : {
                            orderId : product.orderId,
                            productId : product.id
                        }
                    }
                )

            }else{
                req.session.carrito.splice(index,1);

                /* elimina el producto de la tabla carrito */
                await db.Cart.destroy({
                    where : {
                        productId : product.id,
                        orderId : product.orderId
                    }
                })
            }

            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.carrito
            }
            return res.status(200).json(response)

        } catch (error) {
            console.log(error)
            return res.status(500).json(error)

        }
    },

    
    
    empty: async (req, res) => {
        try {
            await db.Order.destroy({
                where : { 
                    userId : req.session.userLogin.id,
                    status : 'pending'
                }
            })

            req.session.carrito = [];
            let response = {
                meta: {
                    link: getURL(req)
                },
                data: req.session.carrito
            }
            return res.status(200).json(response)
        } catch (error) {
            console.error(error)
            return res.status(500).json(error)

        }
    }
}