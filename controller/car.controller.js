import CarModel from '../models/Car.js';

class CarController {
    async createCar(req, res) {
        const {producer, price, image, brand, characteristics} = req.body;
        try {
            const car = new CarModel({
                producer,
                brand,
                price,
                image,
                characteristics
              });
            await car.save();
            res.status(201).json(car);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getAllCars(req, res) {
        try {
            const cars = await CarModel.find().populate('producer').populate('brand');
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getOneCar(req, res) {
        try {
            const car = await CarModel.findById(req.params.id);
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async updateCar(req, res) {
        try {
            const car = await CarModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async deleteCar(req, res) {
        try {
            const car = await CarModel.findByIdAndDelete(req.params.id);
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new CarController();