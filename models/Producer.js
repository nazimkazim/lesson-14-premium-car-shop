import mongoose from "mongoose";

const ProducerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    logo: {
        url: String,
        filename: String,
    },
    cars: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car",
        }
    ]
});

export default mongoose.model("Producer", ProducerSchema);