import mongoose from "mongoose";

export const platformShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Platform =
  mongoose.models.Platform || mongoose.model("Platform", platformShema);

export default Platform;
