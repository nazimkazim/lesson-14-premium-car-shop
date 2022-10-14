import ProducerModel from "../models/Producer.js";

class ProducerController {
    async createProducer(req, res) {
        const {name, address, country} = req.body;
        try {
            const producer = new ProducerModel({
                name,
                address,
                country
              });
            await producer.save();
            res.status(201).json(producer);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getAllProducers(req, res) {
        try {
            const producers = await ProducerModel.find();
            res.status(200).json(producers);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async getOneProducer(req, res) {
        try {
            const producer = await ProducerModel.findById(req.params.id);
            res.status(200).json(producer);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async updateProducer(req, res) {
        try {
            const producer = await ProducerModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(producer);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    async deleteProducer(req, res) {
        try {
            const producer = await ProducerModel.findByIdAndDelete(req.params.id);
            res.status(200).json(producer);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new ProducerController();