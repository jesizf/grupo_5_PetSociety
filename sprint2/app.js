
const express = require ('express');
const app = express();
const path = require ('path');
const port = 3030;

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html' )));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));
app.get('/terminos-y-condiciones', (req, res) => res.sendFile(path.join(__dirname, 'views', 'terminos.html'))) ;
app.get('/nosotros', (req, res) => res.sendFile(path.join(__dirname, 'views', 'nosotros.html'))) ;



app.listen(port, () => console.log('Servidor corriendo en el puerto' + port));