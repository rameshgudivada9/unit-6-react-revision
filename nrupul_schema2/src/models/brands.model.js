
const mongoose=require("mongoose");

const brandSchema=new mongoose.Schema(
    {
    brand_name:[{type:String}],
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Brand=mongoose.model("brand",brandSchema);
module.exports=Brand;