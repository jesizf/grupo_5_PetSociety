
const express = require ('express');
const app = express();
const path = require ('path');
const port = 3030;

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )))
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html' )))

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/como-comprar', (req, res) => res.sendFile(path.join(__dirname, 'views', 'como-comprar.html' )));
app.get('/cambios-y-devoluciones', (req, res) => res.sendFile(path.join(__dirname, 'views', 'cambios-devoluciones.html' )));
app.get('/formas-de-pago', (req, res) => res.sendFile(path.join(__dirname, 'views', 'formas-pagos.html' )))
app.get('/terminos-y-condiciones', (req, res) => res.sendFile(path.join(__dirname, 'views', 'terminos.html'))) ;
app.get('/politicas-de-calidad', (req, res) => res.sendFile(path.join(__dirname, 'views', 'politicas-calidad.html'))) ;
app.get('/nosotros', (req, res) => res.sendFile(path.join(__dirname, 'views', 'nosotros.html'))) ;




app.listen(port, () => console.log('Servidor corriendo en el puerto' + port));