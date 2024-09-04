const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: String,
    items: Number
    
  });
  const Cart = mongoose.model('Cart', cartSchema);
  module.exports=Cart;