const express = require("express");
const Brand = require("../models/brands.model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const brandss= await Brand.find({}).lean().exec();
        return res.status(201).send(brandss);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});

router.post("/", async(req,res)=>{
    try{
const brandss= await Brand.create(req.body)
return res.status(201).send(brandss);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});
router.patch("/:id", async (req, res) => {
    try {
      const post = await Brand.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .lean()
        .exec();
      return res.status(200).send(post);
    } catch (error) {
      return res.status(200).send(error.message);
    }

});


router.get(("/:id"),async(req,res)=>{
    try {

        const brandss=await Brand.findById(req.params.id).lean().exec()
        return res.status(200).send(brandss);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});


router.delete(("/:id"),async(req,res)=>{
    try {

        const brandss=await Brand.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(brandss);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});
module.exports=router