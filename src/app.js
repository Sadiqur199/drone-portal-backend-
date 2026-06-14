const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const mongoose = require("mongoose");

app.get("/", (req, res) => {
	const state = mongoose.connection && typeof mongoose.connection.readyState === 'number'
		? mongoose.connection.readyState
		: 0;
	const states = { 0: "disconnected", 1: "connected", 2: "connecting", 3: "disconnecting" };
	res.json({ status: "ok", db: states[state] || state });
});

app.use("/api/drones", require("./routes/droneRoutes"));

try {
	app.use("/api/users", require("./routes/userRoutes"));
} catch (e) {}

try {
	app.use("/api/checklists", require("./routes/checklistRoutes"));
} catch (e) {}

try {
	app.use("/api/tutorials", require("./routes/tutorialRoutes"));
} catch (e) {}

try {
	app.use("/api/guides", require("./routes/guideRoutes"));
} catch (e) {}

try {
	app.use("/api/parts", require("./routes/partRoutes"));
} catch (e) {}

try {
	app.use("/api/support", require("./routes/supportRoutes"));
} catch (e) {}

module.exports = app;