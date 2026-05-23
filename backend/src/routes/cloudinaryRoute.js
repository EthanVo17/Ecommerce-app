const express = require('express');
const router = express.Router();

const CloudinaryController = require('../controllers/cloudinaryController');

const authMiddleware = require('../middlewares/authMiddleWare');

router.post(
  '/',
  authMiddleware.admin,
  CloudinaryController.upload,
  CloudinaryController.index
);

module.exports = router;
