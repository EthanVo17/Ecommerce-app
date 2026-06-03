const cloudinary = require('../config/cloudinary/cloudinary');
const multer = require('multer');
const authMiddleware = require('../middlewares/authMiddleWare');

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

class CloudinaryController {
  async index(req, res) {
    try {
      if (!req.files || req.files.length === 0) {
        return res
          .status(400)
          .json({ message: 'Choose at least one image to upload' });
      }

      const b64 = Buffer.from(req.files[0].buffer).toString('base64');
      const dataURI = `data: ${req.files[0].mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: 'ecommerce-app',
        resource_type: 'auto',
      });

      res.status(200).json({
        message: 'Image uploaded successfully',
        url: result.secure_url,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error fetching images', error: err.message });
    }
  }
}

module.exports = new CloudinaryController();
