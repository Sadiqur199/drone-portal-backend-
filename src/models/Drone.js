import mongoose from "mongoose";

const droneSchema = new mongoose.Schema(
  {
    droneName: String,
    serialNumber: String,
    purchaseDate: Date,
    warrantyExpiry: Date,
    tankCapacity: String,
    sprayWidth: String,
    maxCoverage: String,

    firmwareVersion: String,

    owner: String,
    company: String,
    location: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "Drone",
  droneSchema
);