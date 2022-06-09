const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {  
      
      image_url: { type: String, required: true },
            name: { type: String, required: true },
            price: { type: String, required: true },
            strikedoffprice: { type: String, required: false },
        brandName: { type: String, required: false },
        category: {
            type: String,
            required: true,
           
          }
    },
    {
        versionKey:false,
    }
);

const User = mongoose.model("user",userSchema)
module.exports = User;