const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: [{ type: String, required: true }],
    color: [{ type: String, required: true }],
    size: [{ type: String, required: true }],
    price: { type: Number, required: true },
    category_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
      }],
  },
  {
    versionKey: false,
  }
);
const Product = mongoose.model("product", productSchema);
module.exports = Product;