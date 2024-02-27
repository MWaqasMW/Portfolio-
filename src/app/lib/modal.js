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
    require: true,
  },
  rating: {
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

const userScehma = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  timestamp: { type: Date, default: Date.now },
});

delete mongoose.models["Qurey"];
delete mongoose.models["FeedBAck"];
delete mongoose.models["User"];

// Create Models
const Qurey = mongoose.model("Qurey", qureyScehma);
const FeedBack = mongoose.model("FeedBAck", feedBackScehma);
const User = mongoose.model("User", userScehma);

export { Qurey, FeedBack, User };
