import CarModel from "../models/Car.js";
import cloudinary from "../cloudinary/index.js";

class CarController {
  async createCar(req, res) {
    
    try {
      const image =  {
        url: req.file.path,
        filename: req.file.filename
      }
      const data = {...req.body, image}
      const car = new CarModel(data);
      await car.save();
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAllCars(req, res) {
    try {
      const query  = {}
      const {price, color, transmission, mileageMax, engineType} = req.query;
      if (price) {
        query.price = {
          $lte: price
        }
      }

      if (mileageMax) {
        query.mileage = {
          $lte: mileageMax
        }
      }

      if (color) {
        query.color = color
      }

      if (transmission) {
        query.transmission = transmission
      }

      if (engineType) {
        query.engineType = engineType
      }

      console.log(query);

      const cars = await CarModel.find(query)
        .populate("producer")
        .populate("brand")
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOneCar(req, res) {
    try {
      const car = await CarModel.findById(req.params.id)
        .populate("producer")
        .populate("brand")
        .populate("characteristic");
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
      const car = await CarModel.findById(req.params.id);
      if (car.image) {
        await cloudinary.cloudinary.uploader.destroy(car.image.filename)
      }
      const deletedCar = await CarModel.findByIdAndDelete(req.params.id);
      res.status(200).json(deletedCar);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new CarController();
