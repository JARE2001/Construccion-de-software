//Authors: Jorge Alan Ramírez Elías, Mariana Soto Ochoa

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'views');

const Mariana = require('./routes/about-me');
const Jorge = require('./routes/about-you');
const tienda = require('./routes/tienda');
const users = require('./routes/users');


app.use(bodyParser.urlencoded({extended: false}));

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer(
    { storage: fileStorage }
    //{ dest: 'uploads' }
    ).single('imagen_producto'));  

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//Para acceder a los recursos de la carpeta uploads
app.use(express.static(path.join(__dirname, 'uploads')));



app.use(cookieParser());

app.use(session({
    secret: 'lkjsdofnasiodufnosidfospd',
    resave: false,
    saveUninitialized: false
}));

app.use('/Mariana', Mariana);

app.use('/Jorge', Jorge);

app.use('/tienda', tienda);

app.use("/pregunta",(request, response, next) => {
    response.render('pregunta');
});

app.use('/users', users);

app.use("/",(request, response, next) => {   
    response.status(404).send('<html><head><meta charset="UTF-8"><title>Page not found</title></head><body><h1>Error 404</h1></body></html>')
});

app.listen(8080);