const express = require("express");
const User = require("../models/users.model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const users= await User.find({category:req.params.id}).lean().exec();
        return res.status(201).send(users);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});

router.post("/", async(req,res)=>{
    try{
const users= await User.create(req.body)
return res.status(201).send(users);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});
router.patch("/:id", async (req, res) => {
    try {
      const post = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .lean()
        .exec();
      return res.status(200).send(post);
    } catch (error) {
      return res.status(200).send(error.message);
    }

});


router.get(("/:id"),async(req,res)=>{
    try {

        const user=await User.findById(req.params.id).lean().exec()
        return res.status(200).send(user);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});


router.delete(("/:id"),async(req,res)=>{
    try {

        const user=await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});
module.exports=router