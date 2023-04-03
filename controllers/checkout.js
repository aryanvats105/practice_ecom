let Item = require('../models/product');
let Cart = require('../models/cart')
let checkout = async (req, res) => {
    try {
      const cartItems = await Cart.find().lean();
  
      if (!cartItems.length) {
        return res.status(404).json({ error: 'Cart is empty' });
      }
      const totalPrice = cartItems.reduce(async (total, item) => {
        const inventoryItem = await Item.findByIdAndUpdate(item.itemId, { $inc: { quantity: -item.quantity } });
        if (!inventoryItem) {
          throw new Error(`Item with ID ${item.itemId} not found in inventory`);
        }
        return total + item.price * item.quantity;
      }, 0);
      const order = new Order({
        items: cartItems,
        total: totalPrice
      });
      await order.save();
      await Cart.deleteMany();
  
      res.json({ message: 'Order created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports = {
    checkout
  }