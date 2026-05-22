const Product = require('../../models/productsModel');

class ProductController {
  // [POST] /api/products (private)
  async createProduct(req, res) {
    try {
      const {
        name,
        description,
        price,
        category,
        images,
        brand,
        countInStock,
      } = req.body;
      const product = new Product({
        name,
        price,
        description,
        images,
        category,
        brand,
        countInStock,
      });
      await product.save();
      res
        .status(201)
        .json({ message: 'Product created successfully', product });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // [GET] /api/products (public)
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // [GET] /api/products/:id (public)
  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.findById);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // [PUT] /api/products/:id (private)
  async updateProduct(req, res) {
    const { name, description, price, category, images, brand, countInStock } =
      req.body;
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.images = images || product.images;
        product.brand = brand || product.brand;
        product.countInStock =
          countInStock !== undefined ? countInStock : product.countInStock;

        const updatedProduct = await product.save();
        res.status(200).json({
          message: 'Product updated successfully',
          product: updatedProduct,
        });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async deleteProduct(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error deleting product', error: error.message });
    }
  }
}

module.exports = new ProductController();
