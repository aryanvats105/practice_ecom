const express = require('express');
const app = express()
 let cartController = require('../controllers/cart')
 let cartRoutes = [
    app.post('/addtocart',cartController.addToCart),
    app.get('/getCartItems',cartController.getCartItems)
 ]
 module.exports = {
    cartRoutes
 }