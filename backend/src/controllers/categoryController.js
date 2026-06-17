const Category = require('../models/categoriesModel');
const slugify = require('slugify');

class CategoryController {
  //[Post] /api/categories
  async createCategory(req, res) {
    try {
      const { name, parentCategory } = req.body;

      const existingCategory = await Category.findOne({ name });
      if (existingCategory) {
        return res
          .status(400)
          .json({ message: 'Category name already exists' });
      }

      const slug = slugify(name, { lower: true, strict: true, locale: 'vi' });
      const newCategory = new Category({
        name,
        parentCategory: parentCategory || null,
        slug,
      });

      const createdCategory = await newCategory.save();
      return res.status(201).json({
        message: 'Category created successfully',
        category: createdCategory,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error creating category', error: err.message });
    }
  }

  //[Put] /api/categories/:id
  async updateCategory(req, res) {
    try {
      const { name, parentCategory } = req.body;

      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      category.name = name || category.name;
      if (name) {
        category.slug = slugify(name, {
          lower: true,
          strict: true,
          locale: 'vi',
        });
      }
      category.parentCategory =
        parentCategory !== undefined ? parentCategory : category.parentCategory;

      const updatedCategory = await category.save();
      return res.status(200).json({
        message: 'Category updated successfully',
        category: updatedCategory,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error updating category', error: err.message });
    }
  }

  //[Delete] /api/categories/:id
  async deleteCategory(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      await Category.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: 'Category deleted successfully' });
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
      const category = await Category.findOne({ slug: categorySlug });
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      return res.json({ category });
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
      return res.status(200).json(categories);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error fetching categories', error: err.message });
    }
  }
}

module.exports = new CategoryController();
