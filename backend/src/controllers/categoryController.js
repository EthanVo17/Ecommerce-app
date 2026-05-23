const Category = require('../models/categoriesModel');
const slugify = require('slugify');

class CategoryController {
  //[Post] /api/categories
  async createCategory(req, res) {
    try {
      const { name, description, parentCategory, image } = req.body;

      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res
          .status(400)
          .json({ message: 'Category name already exists' });
      }

      const slug = slugify(name, { lower: true, strict: true, locale: vi });
      const newCategory = new Category({
        name,
        description,
        parentCategory: parentCategory || null,
        image,
        slug,
      });

      const createdCategory = await newCategory.save();
      res.status(201).json({
        message: 'Category created successfully',
        category: createdCategory,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error creating category', error: err.message });
    }
  }

  //[Put] /api/categories/:id
  async updateCategory(req, res) {
    try {
      const { name, description, parentCategory, image } = req.body;

      const categoryId = await Category.findById(req.params.id);
      if (!categoryID) {
        return res.status(404).json({ message: 'Category not found' });
      }

      if (categoryId) {
        Category.name = name || categoryId.name;
        if (name) {
          Category.slug = slugify(name, {
            lower: true,
            strict: true,
            locale: vi,
          });
        }
        Category.description = description || categoryId.description;
        Category.parentCategory =
          parentCategory !== undefined
            ? parentCategory
            : categoryId.parentCategory;
        Category.image = image || categoryId.image;
      }
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error updating category', error: err.message });
    }
  }

  //[Delete] /api/categories/:id
  async deleteCategory(req, res) {
    try {
      const categoryId = await Category.findById(req.params.id);
      if (!categoryId) {
        return res.status(404).json({ message: 'Category not found' });
      }

      await Category.findByIdAndDelete(req.params.id);
      return res
        .statuss(200)
        .json({ message: 'Category deleted successfully' });
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error deleting category', error: err.message });
    }
  }

  //[Get] /api/categories/:slug
  async getCategory(req, res) {
    try {
      const categorySlug = req.params.slug;
      const categories = await Category.findOne({ slug: categorySlug });
      if (!categories) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json({ category: categories });
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error fetching categories', error: err.message });
    }
  }

  //[Get] all /api/categories/
  async getAllCategories(req, res) {
    try {
      const categories = await Category.find({}).lean();
      res.status(200).json(categories);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error fetching categories', error: err.message });
    }
  }
}

module.exports = new CategoryController();
