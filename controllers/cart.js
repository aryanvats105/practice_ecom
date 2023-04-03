let Product = require('../models/product');
let Cart = require('../models/cart')

let addToCart = async(req,res)=>{
  const itemId = req.body._id;
  const quantity = req.body.quantity;

  try {
    // Fetch the product from the database
    const product = await Product.findById(itemId).exec();

    // Check if product exists
    if (!product) {
      res.status(404).send('Product not found');
      return;
    }

    // Check if product is in stock
    if (product.quantity < quantity) {
      res.status(400).send('Not enough stock');
      return;
    }

    // Add product to cart
    const item = {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity
    };
    const cart = await Cart.findOne({}).exec();

    if (!cart) {
      const newCart = new Cart({
        items: [item]
      });

      await newCart.save();
      res.status(200).send(newCart);
    } else {
      const existingItem = cart.items.find(i => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push(item);
      }

      await cart.save();
      res.status(200).send(cart)
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
let getCartItems = (req,res)=>{
    Cart.find({})
    .then((data)=>{
        res.status(200).send({'data received successfully:':data})
    })
    .catch((err)=>{
        res.status(400).send({'error in getting data:':err})
    })
}
module.exports ={
    addToCart,
    getCartItems
}