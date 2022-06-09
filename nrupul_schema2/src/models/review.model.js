const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: [{ type: String, required: true }],
    product_ids: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    user_ids: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdatails",
      required: true,
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Review = mongoose.model("review", reviewSchema);
module.exports = Review;