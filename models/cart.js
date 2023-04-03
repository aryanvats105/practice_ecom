let mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    items: [
      {
        name: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          default: 1
        }
      }
    ]
  });
  
  const Cart = mongoose.model('Cart', cartSchema);
  module.exports = {
    Cart
}