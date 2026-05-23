const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleWare');
const productController = require('../controllers/productController');

//public routes
router.get('/', productController.getAllProducts);
router.get('/:findById', productController.getProductById);

//private routes
router.post('/', authMiddleware.admin, productController.createProduct);
router.put('/:findById', authMiddleware.admin, productController.updateProduct);
router.delete(
  '/:findById',
  authMiddleware.admin,
  productController.deleteProduct
);

module.exports = router;
