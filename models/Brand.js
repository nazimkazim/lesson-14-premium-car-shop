import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
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

export default mongoose.model("Brand", BrandSchema);