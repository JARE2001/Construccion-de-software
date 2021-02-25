//Authors: Jorge Alan Ramírez Elías, Mariana Soto Ochoa
const express = require('express');
const app = express();
const misRutas1 = require('./routes/info.js');
const misRutas2 = require('./routes/aboutUs.js');


app.use('/productos', misRutas1);
app.use('/empresa', misRutas2);

app.use("/",(request, response, next) => {   
    response.status(404).send('<html><head><meta charset="UTF-8"><title>Page not found</title></head><body><h1>Error 404</h1></body></html>')
});


app.listen(8080);