const express = require("express");
const Review = require("../models/reviews.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const review = await Review.find()
      .populate({ path: "product_ids", select: {} })
      .populate({ path: "user_ids", select: {} })
      .lean()
      .exec();
    return res.status(200).send({ review, status: true });
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

router.post("/create", async (req, res) => {
  try {
    const review = await Review.create(req.body);
    return res
      .status(200)
      .send({ review, status: true, message: "data added successfully" });
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id }).lean().exec();
    return res.status(200).send({ review, status: true });
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .send({ review, status: true, message: "data added successfully" });
  } catch (error) {
    return res.status(400).send({ error: error.message, status: false });
  }
});

module.exports = router;