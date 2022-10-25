import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logo: {
    url: String,
    filename: String,
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

export default mongoose.model("Brand", BrandSchema);
