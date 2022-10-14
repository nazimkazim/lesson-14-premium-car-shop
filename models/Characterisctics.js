import mongoose from "mongoose";

const CharacteristicSchema = new mongoose.Schema({
    year: {
        type: Date(),
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
    }
});

export default mongoose.model("Characteristic", CharacteristicSchema);