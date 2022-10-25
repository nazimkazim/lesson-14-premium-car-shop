import BrandModel from '../models/Brand.js';
import cloudinary from '../cloudinary/index.js';

class BrandController {
    async createBrand(req, res) {
        try {
            const logo = {
                url: req.file.path,
                filename: req.file.filename,
            }
            const data = {...req.body, logo}
            const brand = new BrandModel(data);
            await brand.save();
            res.status(201).json(brand);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getAllBrands(req, res) {
        try {
            const brands = await BrandModel.find();
            res.status(200).json(brands);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getOneBrand(req, res) {
        try {
            const brand = await BrandModel.findById(req.params.id);
            res.status(200).json(brand);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async updateBrand(req, res) {
        try {
            const brand = await BrandModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(brand);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async deleteBrand(req, res) {
        try {
            const brand = await BrandModel.findById(req.params.id);
            if (brand.logo) {
                await cloudinary.cloudinary.uploader.destroy(brand.logo.filename);
            }
            const deletedBrand = await BrandModel.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedBrand);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new BrandController();