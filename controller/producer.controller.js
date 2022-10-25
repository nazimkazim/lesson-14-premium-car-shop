import ProducerModel from "../models/Producer.js";
import cloudinary from "../cloudinary/index.js";

class ProducerController {
    async createProducer(req, res) {
        try {
            const logo = {
                url: req.file.path,
                filename: req.file.filename,
            }
            const data = {...req.body, logo}
            const producer = new ProducerModel(data);
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
            const producer = await ProducerModel.findById(req.params.id);
            if (producer.logo) {
                await cloudinary.cloudinary.uploader.destroy(producer.logo.filename);
            }
            const deletedProducer = await ProducerModel.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedProducer);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

export default new ProducerController();