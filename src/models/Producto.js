const mongoose = require('mongoose');
const { Schema } = mongoose;

const producto = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true }
});

module.exports = mongoose.model('Producto', producto);