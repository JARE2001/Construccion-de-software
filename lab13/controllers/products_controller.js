const Product = require("../models/product");

exports.getInicio = (request, response) =>{ 
    let products =  Product.fetchAll();
    response.render('inicio', { ropa : products});
};

exports.getNewProduct = (request, response,next) =>{
    response.render('add-product');
};

exports.postNewProduct = (request, response,next) =>{
    let producto = new Product(request.body.nombre_producto);
    producto.save();

    response.redirect('/tienda/inicio');
};