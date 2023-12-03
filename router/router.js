import express from 'express';
import { getProducts, getProductById,updateProduct,createProduct,deleteProduct } from '../controllers/productController.js';
const router = express.Router();

router.get('/getproducts', getProducts);
router.get('/getproduct/:id', getProductById);
router.post('/createproduct', createProduct);
router.put('/updateproduct/:id', updateProduct);
router.delete('/deleteproduct/:id', deleteProduct);

export default router;