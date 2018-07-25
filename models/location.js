const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: { type: String, required: true },
  alias: { type: String, required: true },
  image_url: String,
  date: { type: Date, default: Date.now }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
