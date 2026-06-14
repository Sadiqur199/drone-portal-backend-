const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.warn("MONGO_URI not set. Skipping DB connection (only for development).");
    return;
  }

  try {
    await mongoose.connect(uri);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }

    const fallback = process.env.MONGO_LOCAL_URI || "mongodb://127.0.0.1:27017/backend";
    try {
      await mongoose.connect(fallback);
      console.log("Connected to fallback local MongoDB:", fallback);
    } catch (localErr) {
      console.error("Fallback local MongoDB connection failed:", localErr);
      // still don't exit in development; app can run without DB for some tasks
    }
  }
};

module.exports = connectDB;