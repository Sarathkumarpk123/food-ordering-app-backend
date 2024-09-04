const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category: String
  });
  const Restaurent = mongoose.model('Restaurent', foodSchema);
  module.exports=Restaurent;