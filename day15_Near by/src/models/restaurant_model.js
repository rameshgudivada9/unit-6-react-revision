const mongoose=require("mongoose");


 const restaurentSchema = new mongoose.Schema(
    {
    name:String,
    location:{
        type:{
        type:String,
        enum:['point'],
        default:"point"
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );

  restaurentSchema.index({location:"2dsphere"})
  
  const Restaurant = mongoose.model("restaurant", restaurentSchema);

  module.exports=Restaurant;