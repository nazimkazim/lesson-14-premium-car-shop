import mongoose from "mongoose";

const ProducerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cars: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car",
        }
    ]
});

export default mongoose.model("Producer", ProducerSchema);