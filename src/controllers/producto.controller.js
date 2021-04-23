const Producto = require('../models/Producto');
const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
        precio: req.body.precio
    });
    await producto.save();
    res.json({status: 'Producto guardado'});
}

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.updateProducto = async (req, res) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        stock: req.body.stock,
        precio: req.body.precio
    };
    await Producto.findByIdAndUpdate(id, {$set: producto});
    res.json({
        status: 'Producto actualizado'
    });
}

productoCtrl.deleteProducto = async (req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado'});
}

module.exports = productoCtrl;