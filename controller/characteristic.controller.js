import CarCharacteristicModel from "../models/Characteristics.js";

class CarCharacteristicController {
  async createCarCharacteristic(req, res) {
    const {
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
      const carCharacteristic = new CarCharacteristicModel({
        year,
        mileage,
        color,
        engineType,
        engineVolume,
        transmission,
        clearance,
        bodyType,
      });
      await carCharacteristic.save();
      res.status(201).json(carCharacteristic);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

    async getAllCarCharacteristics(req, res) {
        try {
            const carCharacteristics = await CarCharacteristicModel.find();
            res.status(200).json(carCharacteristics);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getCarCharacteristicById(req, res) {
        try {
            const carCharacteristic = await CarCharacteristicModel.findById(req.params.id);
            res.status(200).json(carCharacteristic);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async updateCarCharacteristic(req, res) {
        try {
            const carCharacteristic = await CarCharacteristicModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(carCharacteristic);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async deleteCarCharacteristic(req, res) {
        try {
            const carCharacteristic = await CarCharacteristicModel.findByIdAndRemove(req.params.id);
            res.status(200).json(carCharacteristic);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new CarCharacteristicController();
