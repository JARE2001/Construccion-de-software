const Product = require("../models/product");

exports.getInicio = (request, response) =>{ 
    Product.fetchAll()
        .then(([rows, fieldData])=>{
            console.log (rows);
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
    let producto = new Product(request.body.nombre_producto, request.body.imagen_producto);
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
    Personaje.fetchOne(id)
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