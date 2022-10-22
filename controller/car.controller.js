import CarModel from "../models/Car.js";

class CarController {
  async createCar(req, res) {
    const {
      producer,
      price,
      image,
      brand,
      year,
      mileage,
      color,
      engineType,
      engineVolume,
      transmission,
      clearance,
      bodyType,
    } = req.body;
    try {
      const car = new CarModel({
        producer,
        brand,
        price,
        image,
        year,
        mileage,
        color,
        engineType,
        engineVolume,
        transmission,
        clearance,
        bodyType,
      });
      await car.save();
      res.status(201).json(car);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAllCars(req, res) {
    try {
      const { price, color, transmission, mileageMax, engineType, clearance } =
        req.query;

      let query = {};

      if (price) {
        query.price = {
          $lte: price,
        };
      }

      if (color) {
        {
          query.color = color;
        }
      }

      if (transmission) {
        {
          query.transmission = transmission;
        }
      }

      if (mileageMax) {
        query.mileage = { $lt: mileageMax };
      }

      if (engineType) {
        query.engineType = engineType;
      }

      if (clearance) {
        query.clearance = clearance;
      }

      const cars = await CarModel.find(query)
        .populate("producer")
        .populate("brand");
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
