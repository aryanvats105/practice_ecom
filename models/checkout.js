let mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
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
    ],
    total: {
      type: Number,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });
  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = {
    Order
}