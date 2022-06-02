
const express=require("express");
const mongoose=require("mongoose");

const app=express();

app.use(express.json());

const connectDb=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/NEARBY");
}

 const restaurentSchema = new mongoose.Schema(
    {
    name:String,
    location:{
        type:{
        type:String,
        default:"point"
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
    }
    
  );

  restaurentSchema.index({location:'2dsphere'});
  
  const Restaurant = mongoose.model("restaurant", restaurentSchema);




  app.get(("/restaurants"),async(req,res)=>{
    try {

        const userdata=await Restaurant.find({}).lean().exec();
        return res.status(200).send(userdata);
        
    } catch (error) {

        return res.status(500).send("something went wrong");
    
    }

});




app.post("/restaurants",async(req,res)=>{
    try {

        const user=await Restaurant.create(req.body)

        console.log(req.body)
        return res.status(201).send(user);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});








app.listen("5001",async()=>{
 await connectDb()
    console.log("5001")
})