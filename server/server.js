import express from "express";
import assets from "./data/Assets.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// LOAD ASSETS FROM SERVER

app.get("/api/assets", (req, res) => {
  res.json(assets);
});

// LOAD ASSET FROM SERVER

app.get("/api/assets/:id", (req, res) => {
  const asset = assets.find((p) => p._id === req.params.id);
  res.json(asset);
});

app.get("/", (req, res) => {
  res.send("API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
