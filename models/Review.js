const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  driverRating: { type: Number, required: true },
  comfortRating: { type: Number, required: true },
  onTimeDriver: { type: String, enum: ["yes", "no"], required: true },
  onTimeArrival: { type: String, enum: ["yes", "no"], required: true },
  carLevelRating: { type: Number, required: true },
  tripCost: { type: String, required: true },
  overallRating: { type: Number, required: true },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
