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
    required: true,
  },
  Raiting: {
    type: Number,
    required: true,
    max: 1,
    min: 5,
  },
  detail: {
    type: String,
  },
  timestamp: { type: Date, default: Date.now },
});

const resumeScehma = new mongoose.Schema({
  file: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

// Clear Model Cache
delete mongoose.models["Qurey"];
delete mongoose.models["FeedBAck"];
delete mongoose.models["Resume"];

// Create Models
const Qurey = mongoose.model("Qurey", qureyScehma);
const FeedBack = mongoose.model("FeedBAck", feedBackScehma);
const Resume = mongoose.model("Resume", resumeScehma);

export { Qurey, FeedBack, Resume };