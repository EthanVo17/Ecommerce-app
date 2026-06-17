const express = require('express');
const brandController = require('../controllers/brandController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public
router.get('/', brandController.getBrands);

// Private (admin only)
router.post('/', authMiddleware.protect, authMiddleware.admin, brandController.createBrand);
router.put('/:id', authMiddleware.protect, authMiddleware.admin, brandController.updateBrand);
router.delete('/:id', authMiddleware.protect, authMiddleware.admin, brandController.deleteBrand);

module.exports = router;
