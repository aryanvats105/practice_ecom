let mongoose = require('mongoose')
let productSchema = new mongoose.Schema({
    name:{
        required:true,
        minLength:3,
        maxLength:50,
        type:String,
        trim:true
    },
    price:{
        type:Number,
        minLength:1,
        maxLength:100000,
        required:true
    },
    quantity:{
        type:Number,
        minLength:1,
        maxLength:1000,
        required:true
    }
})
let Product = mongoose.model('products',productSchema)
module.exports = {
    Product
}