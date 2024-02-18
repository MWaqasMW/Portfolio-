import { mongoose } from "mongoose";

delete mongoose.models["Qurey"];

const qureyScehma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  timestamp: { type: Date, default: Date.now },
});

const Qurey = mongoose.model("Qurey", qureyScehma);

export default Qurey;
