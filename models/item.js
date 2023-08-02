// models/item.js

const mongoose = require('mongoose');

// Define the schema for the item collection
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

// Create the model for the item collection
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
