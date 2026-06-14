import mongoose from "mongoose";

const checklistSchema = new mongoose.Schema({
  title: String,
  description: String,

  status: {
    type: String,
    enum: [
      "done",
      "overdue",
      "upcoming",
      "week",
    ],
  },
});

export default mongoose.model(
  "Checklist",
  checklistSchema
);