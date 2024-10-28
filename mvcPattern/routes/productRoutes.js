const express = require('express');
const router = express.Router();    

const { getProduct, deleteProduct, updateProduct, createProduct} = require('../controllers/productController');


router.get('/products', getProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);




module.exports = router;