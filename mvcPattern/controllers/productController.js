const Product = require('../models/productModel');
// const {all} =require('../routes/productRoutes');

const getProduct = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        
        if( !allProducts ||allProducts.length === 0){
            return res.status(404).json({
                success: false,
                message: 'No products found'
            });
        }
        else{
            res.status(200).json({
                success: true,
                products: allProducts
            });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: ' Internal Server Error'});
    }
}

const createProduct = async (req, res) => {
    try {
        const {name , price, description , category} = req.body;
        const newProduct = new Product({
            name: name,
            price: price,
            description: description,
            category: category
        });

        await newProduct.save();

        res.status(201).json({
            success: true,
            Product: newProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: ' Internal Server Error'});
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {name , price, description , category} = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, description, category}, {new: true});
        if(!updatedProduct){
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            product: updatedProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: ' Internal Server Error'});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            products: deletedProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: ' Internal Server Error'});
    }
}

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };