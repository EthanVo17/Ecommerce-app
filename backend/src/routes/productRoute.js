const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleWare');
const ProductController = require('../controllers/productController');

//public routes
router.get('/', ProductController.getAllProducts);
router.get('/:slug', ProductController.getProduct);

//private routes
router.post('/', authMiddleware.protect, authMiddleware.admin, ProductController.createProduct);
router.put('/:slug', authMiddleware.protect, authMiddleware.admin, ProductController.updateProduct);
router.delete('/:slug', authMiddleware.protect, authMiddleware.admin, ProductController.deleteProduct);

module.exports = router;
