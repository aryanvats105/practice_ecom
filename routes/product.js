const express = require('express');
const app = express()
 let productController = require('../controllers/product')
 let productRoutes = [
    app.post('/addtocart',productController.addProducts),
    app.get('/getCartItems',productController.getProducts)
 ]
 module.exports = {
    cartRoutes
 }