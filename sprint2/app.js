
const express = require ('express');
const app = express();
const path = require ('path');
const port = 3030;

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )))
app.get('/como-comprar', (req, res) => res.sendFile(path.join(__dirname, 'views', 'como-comprar.html' )));
app.get('/cambios-y-devoluciones', (req, res) => res.sendFile(path.join(__dirname, 'views', 'cambios-devoluciones.html' )));
app.get('/formas-de-pago', (req, res) => res.sendFile(path.join(__dirname, 'views', 'formas-pagos.html' )))

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))



app.listen(port, () => console.log('Servidor corriendo en el puerto' + port));