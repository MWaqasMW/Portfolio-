import mongoose from "mongoose";

// Define Schemas
const qureyScehma = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  timestamp: { type: Date, default: Date.now },
});

const feedBackScehma = new mongoose.Schema({
  name: {
    type: String,
  },
  raiting: {
    type: Number,
    require: true,
    max: 5,
    min: 1,
  },
  message: {
    type: String,
  },
  timestamp: { type: Date, default: Date.now },
});

// Clear Model Cache
delete mongoose.models["Qurey"];
delete mongoose.models["FeedBAck"];

// Create Models
const Qurey = mongoose.model("Qurey", qureyScehma);
const FeedBack = mongoose.model("FeedBAck", feedBackScehma);

export { Qurey, FeedBack };
