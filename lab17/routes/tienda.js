const express = require('express');

const productsController = require('../controllers/products_controller');

const router = express.Router();



router.get("/inicio",productsController.getInicio);
router.get("/add-product", productsController.getNewProduct);
router.post("/add-product", productsController.postNewProduct);
router.get("/:product_id", productsController.getProduct);
router.post("/:product_id", productsController.postProduct);



module.exports = router;