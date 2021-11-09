'use strict';



let products = [
  {
      "id" : 1,
    "name": "PRO PLAN PUPPY MEDIANO 15+3 KG BONUS",
    "description": "Durante la “brecha inmunológica” y provee nutrición completa que ayuda a los cachorros a crecer fuertes y sanos.\r\nFormulado con carne fresca de pollo como ingrediente principal, además de vitaminas y minerales esenciales, PRO PLAN® Puppy Razas Medianas ofrece una óptima nutrición para cachorros en crecimiento.",
    "price": 7340,
    "categoryId": 1,
    "weighId": 13,
   "createdAt": new Date,
     "image": 
        "img-producto1633610759495.jpg",
       
  },
  {
    "id" : 2,
    "name": "MON AMI DENTAL STICK",
    "description": "¿Sabés lo importante que es la salud dental de tu perro? ¿Le das el cuidado que requiere? La higiene dental ayuda a prevenir enfermedades y mejora el aliento de tu mascota. Como sabemos lo tedioso que es realizar cotidianamente la limpieza dental de tu perro, desarrollamos Mon Ami Dental Stick, una solución para este problema. El uso diario y continuado de Mon Ami Dental ayudará a que tu mascota mantenga su salud bucal de manera práctica, fácil y segura.",
    "price": 835,
    "categoryId": 1,
    "weighId": 5,
   "createdAt": new Date,
     "image": 
        "img-producto1633611293174.png",
       
  },
  {
    "id" : 3,
    "name": "MON AMI TRAINEE",
    "description": "Los Snacks Mon Ami Trainee, han sido diseñados especialmente para entrenadores profesionales y para aquellos que disfrutan de educar a su mascota. Su tamaño y calidad permiten la entrega de varias unidades a lo largo de una sesión de entrenamiento. Además, están fabricados con ingredientes 100% naturales para asegurar que tu perro tenga una dieta de alta calidad y saludable.",
    "price": 775,
    "categoryId": 1,
    "weighId": 5,
   "createdAt": new Date,
     "image": 
        "img-producto1633611435406.png",
        
  },
  {
    "id" : 4,
    "name": "Huesos de cuero",
    "description": "Suplemento alimenticio que es utilizado como premio para las mascotas, tiene un buen aporte de vitaminas y minerales importantes para el desarollo de los huesos y dientes sanos y fuertes.\r\nAdemás, ayudan a remover las partículas presentes en los dientes del animal que provocan el mal aliento y la formación de sarro. Actúa sobre las placas bacterianas, evitando la acumulación de residuos de alimentos, contribuyendo así a la limpieza e higiene bucal.",
    "price": 65,
    "categoryId": 1,
    "weighId": 1,
   "createdAt": new Date,
     "image": 
        "img-producto1633611825905.webp",
       
  },
  {
    "id" : 5,
    "name": "CAT CHOW ADULTO PESCADO",
    "description": "Defense Plus®, una combinación exclusiva de prebiótico natural, antioxidantes, vitaminas, y minerales que ayudan a fortalecer las defensas naturales de tu gato. Esto ayudará a promover un sistema inmune fuerte para proteger su estilo de vida único.",
    "price": 5095,
    "categoryId": 2,
    "weighId": 13,
   "createdAt": new Date,
     "image": 
        "img-producto1633892695039.jpg",
      
  },
  {
    "id" : 6,
    "name": "CAT CHOW GATITO",
     "description": "Una nueva nutrición es fundamental para proteger la salud de los gatos . Es por eso que desarrollamos PURINA® CAT CHOW® GATITOS PESCADO, CARNE Y LECHE, desde el destete hasta 12 meses con DEFENSE PLUS, hecho con todos los nutrientes que tu gatito necesita para favorecer un crecimiento sano, y mejorado con la inclusión de un prebiótico natural.",
     "price": 500,
     "categoryId": 2,
     "weighId": 6,
    "createdAt": new Date,
     "image": 
        "img-producto1633892826163.jpg",
       
  },
  {
    "id" : 7,   
    "name": "PEDIGREE DENTASTIX X 7 RAZAS MEDIANAS",
    "description": "Pedigree® DENTASTIX™ es una barra de cuidado oral diario que ayuda a prevenir enfermedades de las encías y mal aliento en los perros. Gracias a su forma exclusiva y combinación de ingredientes activos, es una efectiva solución para ayudar a mantener sus dientes limpios y encías saludables de forma fácil y divertida.",
    "price": 255,
    "categoryId": 1,
    "weighId": 3,
   "createdAt": new Date,
     "image": 
        "img-producto1633893299069.webp",
        
  },
  {
    "id" : 8,
    "name": "Iams Alimento Seco Perro",
    "description": "IAMS® PROACTIVE HEALTH - ADULT SMALL & MEDIUM BREED es alimento seco 100% completo y balanceado, desarrollado especialmente para perros adultos de razas pequeñas y medianas, mayores a 12 meses de edad, sabor pollo.",
    "price": 4400,
    "categoryId": 1,
    "weighId": 12,
   "createdAt": new Date,
     "image": 
        "img-producto1633893800580.webp",
       
  },
  {
    "id" : 9,
    "name": "Alimento Perros Adultos Infinity Premium",
    "description": "Infinity Perros Adultos aporta el 100 % de los nutrientes necesarios para que su perro goce de una vida sana y placentera. Aporta óptimos niveles energéticos, proteínas de alta digestabilidad, grasas de alto valor biológico, hidratos de carbono perfectamente dextrinizados, vitaminas, minerales, fibras adecuadas para una mejor salud intestinal y una excelente palatabilidad. Infinity Perros Adultos está formulado contemplando los niveles y perfiles nutricionales establecidos por AAFCO (Asociación Americana de Oficiales en Control de Alimentos) para un adecuado mantenimiento de su perro adulto.",
    "price": 3500,
    "categoryId": 1,
    "weighId": 15,
   "createdAt": new Date,
     "image": 
        "img-producto1633894139746.webp",
         
     
  },
  {
    "id" : 10,
    "name": "EUKANUBA PERRO CACHORRO GRANDE",
     "description": "Alimento balanceado recomendado para perros de razas grandes de 1 a 12 meses y gigantes de 1 a 24 meses. Fomenta la formación de huesos y articulaciones fuertes, característica esencial para perros de gran tamaño. Además, potencia las defensas naturales y el funcionamiento de su sistema nervioso.",
     "price": 2042,
     "categoryId": 1,
     "weighId": 9,
    "createdAt": new Date,
     "image": 
        "img-producto1633894971354.jpg",
        
  },
  {
    "id" : 11,
    "name": "CAT CHOW ADULTO CARNE",
    "description": "Defense Plus®, una combinación exclusiva de prebiótico natural, antioxidantes, vitaminas, y minerales que ayudan a fortalecer las defensas naturales de tu gato. Esto ayudará a promover un sistema inmune fuerte para proteger su estilo de vida único.",
    "price": 1180,
    "categoryId": 2,
    "weighId": 9,
   "createdAt": new Date,
     "image": 
        "img-producto1633895135178.jpg",
     
  },
  {
    "id" : 12,
    "name": "Alimento Excellent Pollo Y Arroz para Gato",
    "description": "La selección de un alimento adecuado para tu mascota es muy importante para garantizar su crecimiento, desarrollo y salud. Con esta opción de Excellent podrás cubrir las necesidades nutricionales y energéticas de tu gato.\r\n\r\nTu mascota siempre saludable\r\nUna alimentación equilibrada es esencial para que tu fiel compañero se mantenga sano y fuerte. La dieta de tu gato se refleja en su pelaje, por eso es de vital importancia que contenga todos los nutrientes necesarios para su crecimiento. Asegurá la energía y vitalidad de tu amigo para que pueda correr, saltar y jugar todo el día.",
    "price": 1940,
    "categoryId": 2,
    "weighId": 9,
   "createdAt": new Date,
     "image": 
        "img-producto1633895451241.webp",
       
  },
  {
    "id" : 13,
    "name": "Cat Chow Gatos Adultos Sabor Pollo",
    "description": "Proteína para una nutrición completa\r\nAlimento rico en proteína animal de alto valor biológico, contiene minerales como calcio, fósforo, potasio y hierro, vitaminas A, D y E, fibras y ácidos grasos esenciales. Estos nutrientes favorecen el fortalecimiento del sistema inmunológico de tu mascota y el correcto funcionamiento de sus sistemas vitales. Además, contribuyen a la salud de su pelo, piel y uñas y al mantenimiento de sus tendones, músculos y huesos.",
    "price": 60,
    "categoryId": 2,
    "weighId": 2,
    "createdAt": new Date,
     "image": 
        "img-producto1633895625056.webp",
      
  },
  {
    "id" : 14,
    "name": "Pouch Para Gato Royal Canin Intense Beauty En Salsa.",
    "description": "Proteína para una nutrición completa Alimento rico en proteína animal de alto valor biológico, contiene minerales como calcio, fósforo, potasio y hierro, vitaminas A, D y E, fibras y ácidos grasos esenciales. Estos nutrientes favorecen el fortalecimiento del sistema inmunológico de tu mascota y el correcto funcionamiento de sus sistemas vitales. Además, contribuyen a la salud de su pelo, piel y uñas y al mantenimiento de sus tendones, músculos y huesos.",
    "price": 185,
    "categoryId": 2,
    "weighId": 2,
      "createdAt": new Date,
     "image": 
        "img-producto1633895784864.webp",
       
  },
  {
    "id" : 15,
    "name": "Alimento Excellent Reduced Calorie para Gato",
    "description": "Proteína para una nutrición completa\r\nAlimento rico en proteína animal de alto valor biológico, contiene minerales como calcio, fósforo, potasio y hierro, vitaminas A, D y E, fibras y ácidos grasos esenciales. Estos nutrientes favorecen el fortalecimiento del sistema inmunológico de tu mascota y el correcto funcionamiento de sus sistemas vitales. Además, contribuyen a la salud de su pelo, piel y uñas y al mantenimiento de sus tendones, músculos y huesos.",
    "price": 839,
    "categoryId": 2,
    "weighId": 6,
      "createdAt": new Date,
     "image": 
        "img-producto1633895905755.webp",
        
  },
  {
    "id" : 16,
    "name": "Alimento Royal Canin CatVet Kitten 36",
    "description": "Beneficios del alimento seco\r\nLa mayor ventaja de la comida seca para mascotas es que se puede almacenar por mucho más tiempo sin que se deteriore, y evita la aparición de hongos o bacterias. Además, este tipo de alimento ayuda a eliminar el sarro y a retrasar la formación de la placa dental con el proceso de masticación y trituración.",
    "price": 2330,
    "categoryId": 2,
    "weighId": 7,
      "createdAt": new Date,
     "image": 
        "img-producto1633896160460.webp"
       
  }
]
let images = products.map(product =>{
  let image = {
    productId : product.id,
    file: product.image,
    createdAt : new Date
  }
  return image
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Images', images, {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Images',images, null, {});
     
  }
};
