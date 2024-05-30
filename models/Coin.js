const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  year: { type: Number, required: true },
  value: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Coin", coinSchema);
