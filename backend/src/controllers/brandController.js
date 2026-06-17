const slugify = require('slugify');

const Brand = require('../models/brandsModel');

class brandController {
  // [GET] /api/brands
  async getBrands(req, res) {
    try {
      const brands = await Brand.find().sort({ name: 1 });
      return res.status(200).json(brands);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách Brand:', error);
      return res
        .status(500)
        .json({ message: 'Lỗi server khi lấy dữ liệu.', error: error.message });
    }
  }

  // [POST] /api/brands (private - admin)
  async createBrand(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: 'Vui lòng nhập tên thương hiệu.' });
      }

      const existingBrand = await Brand.findOne({ name });
      if (existingBrand) {
        return res.status(400).json({ message: 'Thương hiệu đã tồn tại.' });
      }

      const slug = slugify(name, { lower: true, strict: true });
      const brand = await Brand.create({ name, slug });

      return res.status(201).json({
        message: 'Brand created successfully',
        brand,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Lỗi server khi tạo thương hiệu.', error: error.message });
    }
  }

  // [PUT] /api/brands/:id (private - admin)
  async updateBrand(req, res) {
    try {
      const { name } = req.body;

      const brand = await Brand.findById(req.params.id);
      if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
      }

      if (name) {
        brand.name = name;
        brand.slug = slugify(name, { lower: true, strict: true });
      }

      const updatedBrand = await brand.save();
      return res.status(200).json({
        message: 'Brand updated successfully',
        brand: updatedBrand,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Lỗi server khi cập nhật thương hiệu.', error: error.message });
    }
  }

  // [DELETE] /api/brands/:id (private - admin)
  async deleteBrand(req, res) {
    try {
      const brand = await Brand.findById(req.params.id);
      if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
      }

      await Brand.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: 'Brand deleted successfully' });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Lỗi server khi xóa thương hiệu.', error: error.message });
    }
  }
}

module.exports = new brandController();
