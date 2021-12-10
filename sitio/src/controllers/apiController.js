const db = require('../database/models');
const fs = require('fs');
const path = require('path')

module.exports = {
   deleteImage : async (req, res) =>{
       try {
           let image = await db.Image.findByPk(req.params.id) //capturo la imagen
           fs.existsSync(path.join(__dirname, '../../public/images/products/' +image.file)) ? fs.unlinkSync(path.join(__dirname, '../../public/images/products/' +image.file)) : null
           
           await db.Image.destroy( //elimino la imagen 
               {
                   where: {
                       id: req.params.id
                   }
               }
           )

           let images = await db.Image.findByPk( //busca todas las imagenes del producto, las que quedaron
               {
                   where : {
                       productId: image.productId
                   }
               }
           )
           let response = { // mando una respuesta
               status: 201,
               messaje: 'Imagen eliminada',
               images // le mando de nuevo el array de imagenes IMPORTANTE
           }
           return res.status(201).json(response)

       } catch (error) {
        return res.status(400).json({
            status : 400,
            message : error
        })
       }
   },
   addImage: async (req, res) =>{
    try {
        let files = req.files.map(image =>{
            let img = {
                file : image.filename,
                productId: req.params.id
            }
            return img
        })
        await db.Image.bulkCreate(files,{validate : true});
        let images = await db.Image.findByPk( //busca todas las imagenes del producto, las que quedaron
            {
                where : {
                    productId: req.params.id
                }
            }
        )
        let response = { // mando una respuesta
            status: 201,
            messaje: 'Imagen agregada',
            images // le mando de nuevo el array de imagenes IMPORTANTE
        }
        return res.status(201).json(response)
        
    } catch (error) {
        return res.status(400).json({
            status : 400,
            message : error
        })
    }
}
}

