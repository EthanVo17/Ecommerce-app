const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:slug', CategoryController.getCategory);
router.get('/all', CategoryController.getAllCategories);

router.post(
  '/createcategory',
  authMiddleware.protect,
  authMiddleware.admin,
  CategoryController.createCategory
);
router.put(
  '/:id',
  authMiddleware.protect,
  authMiddleware.admin,
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  authMiddleware.protect,
  authMiddleware.admin,
  CategoryController.deleteCategory
);

module.exports = router;
