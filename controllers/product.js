let Product = require('../models/product');
let addProducts = (req,res)=>{
    let product = new Product(req.body)
    product.save()
    .than((data)=>{
        res.status(200).send({'Product added  successfully':data})
    })
    .catch((err)=>{
        res.status(400).send({'error in adding Product':err})
    })
}
let getProducts = (req,res)=>{
    Product.find({})
    .than((data)=>{
        res.status(200).send({'Product fetched  successfully':data})
    })
    .catch((err)=>{
        res.status(400).send({'error in fetching Product':err})
    })
}

module.exports = {
    addProducts,
    getProducts
}