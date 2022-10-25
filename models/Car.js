import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producer",
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
    },
    year: {
        type : Date,
        required: true,
    },
    mileage: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    engineType: {
        type: String,
        required: true,
    },
    engineVolume: {
        type: Number,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    clearance: {
        type: Boolean,
        required: true,
    },
    bodyType: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        filename: String,
    }
});

export default mongoose.model("Car", CarSchema);