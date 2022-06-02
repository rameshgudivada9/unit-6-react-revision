
const mongoose=require("mongoose");

const connectDb=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/NEARBY");
}

module.exports=connectDb