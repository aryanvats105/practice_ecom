const express = require('express');
const app = express()
 let cartController = require('../controllers/cart')
 let checkController = require('../controllers/checkout')
 let checkOutRoutes = [
    app.post('/checkout',checkController.checkout),
    app.get('/getCartItems',cartController.getCartItems)
 ]
 module.exports = {
    checkOutRoutes
 }