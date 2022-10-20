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
    characteristic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Characteristic",
    },
    image: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Car", CarSchema);