const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Incoming review data:", req.body);  
    const review = new Review(req.body);
    await review.save();
    res.status(201).send({ message: "Review saved successfully!" });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(400).send({ error: error.message });
  }
});


module.exports = router;
