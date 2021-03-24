const Product = require("../models/product");

exports.getInicio = (request, response) =>{ 
    Product.fetchAll()
        .then(([rows, fieldData])=>{
            response.render('inicio', { 
                ropa : rows,
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getNewProduct = (request, response,next) =>{
    response.render('add-product',{
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNewProduct = (request, response,next) =>{

    console.log("Creando nuevo producto...");
    const image = request.file;
    console.log(image);

    if(!image) {
        console.error('Error al subir la imagen');
        return response.status(422).redirect('/tienda/inicio');
    }

    let producto = new Product(request.body.nombre_producto, image.filename);
    producto.save()
        .then(()=>{
            response.setHeader('Set-Cookie', ['ultimo_producto='+ producto.name +'; HttpOnly']);
            response.redirect('/tienda/inicio');
        })
        .catch(err => {
            console.log(err);
        }); 
            
};

exports.getProduct = (request, response, next) => {
    const id = request.params.product_id;
    Product.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('inicio', { 
                ropa: rows,
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};