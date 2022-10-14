import BrandModel from '../models/Brand.js';

class BrandController {
    async createBrand(req, res) {
        const {name, logo} = req.body;
        try {
            const brand = new BrandModel({
                name,
                logo
              });
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
            const brand = await BrandModel.findByIdAndDelete(req.params.id);
            res.status(200).json(brand);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new BrandController();