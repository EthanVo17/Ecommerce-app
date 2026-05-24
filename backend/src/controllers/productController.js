const Product = require('../models/productsModel');

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
        slug,
        countInStock,
      } = req.body;
      const product = new Product({
        name,
        price,
        description,
        images,
        category,
        brand,
        slug,
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

  // [GET] all /api/products (public)
  async getAllProducts(req, res) {
    try {
      const keyword = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: 'i',
            },
          }
        : {};
      const products = await Product.find({ ...keyword }).populate(
        'category',
        'name slug'
      );
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // [GET] /api/products/:slug (public)
  async getProduct(req, res) {
    try {
      const keyword = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: 'i',
            },
          }
        : {};
      const product = await Product.findOne({ ...keyword }).populate(
        'category',
        'name slug'
      );
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // [PUT] /api/products/:slug (private)
  async updateProduct(req, res) {
    const {
      name,
      description,
      price,
      category,
      images,
      brand,
      countInStock,
      slug,
    } = req.body;
    try {
      const product = await Product.findOne({ slug: req.params.slug }).populate(
        'category'
      );
      if (product) {
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.category = category || product.category;
        product.images = images || product.images;
        product.brand = brand || product.brand;
        product.slug = slug || product.slug;
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

  // [DELETE] /api/products/:slug (private)
  async deleteProduct(req, res) {
    try {
      const productId = await Product.findOne({ _id: req.params._id });
      const product = await Product.findOneAndDelete({ slug: req.params.slug });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error deleting product', error: err.message });
    }
  }
}

module.exports = new ProductController();
