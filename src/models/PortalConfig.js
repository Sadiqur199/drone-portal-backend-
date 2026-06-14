import mongoose from "mongoose";

const portalConfigSchema = new mongoose.Schema({
  tabs: [
    {
      name: String,
      slug: String,
      active: Boolean,
    },
  ],
});

export default mongoose.model(
  "PortalConfig",
  portalConfigSchema
);