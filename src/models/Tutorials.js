import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema({
  title: String,
  category: String,
  duration: String,
  thumbnail: String,
  videoUrl: String,
});

export default mongoose.model(
  "Tutorial",
  tutorialSchema
);