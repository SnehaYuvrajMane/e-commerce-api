
import Product from '../models/Product.js';
import connectDB from '../database/connectDB.js';

const getProducts = async (req, res) => {
    try {
        connectDB();
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const getProductById = async (req, res) => {
    try {
        connectDB();
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        connectDB();
        const data = req.body;
        if(data.Size === "L" && data.Color === "Red"){
            data.Price = 100;
        }
        else if(data.Size === "M" && data.Color === "Red"){
            data.Price = 150;
        }
        else if(data.Size === "L" && data.Color === "Green"){
            data.Price = 200;
        }
        else if(data.Size === "M" && data.Color === "Green"){
            data.Price = 250;
        }

        console.log(data);
        const product = new Product(data);
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        connectDB();
        const data = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = data.name || product.name;
            product.category = data.category || product.category;
            product.size = data.size || product.size;
            product.color = data.color || product.color;
            product.price = data.price || product.price;
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        }   
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        connectDB();
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getProducts, getProductById,updateProduct, createProduct,  deleteProduct };
