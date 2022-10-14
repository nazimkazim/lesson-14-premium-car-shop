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
}

export default new BrandController();