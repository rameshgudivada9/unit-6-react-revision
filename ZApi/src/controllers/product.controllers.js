const express = require("express");
const User = require("../models/product.model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        // const users= await User.find({}).lean().exec();
        // return res.status(201).send(users);

        let filter = (req.query.category || req.query.brandName)?{$and:[]}:{};
        if (req.query.category) {
          
          filter["$and"].push({ category: { $eq: req.query.category } });
        }
        if (req.query.brandName) {
          
          filter["$and"].push({ brandName: { $eq: req.query.brandName } });
        }
    
        // console.log(filter["$and"]);
        let page = req.query.page || 1;
        let perPage = req.query.perPage || 20;
        let skip = (page - 1) * perPage;
        let sortData = req.query.sort
          ? {
            price: `${req.query.sort == "asc" ? 1 : -1}`,
            }
          : null;
        // console.log(sortData, req.query.sort);
        let totalPage = Math.ceil(
          (await User.find().countDocuments()) / perPage
        );
        const product = await User.find(filter)
          .skip(skip)
          .limit(perPage)
          .sort(sortData);
    
        return res.status(200).send({ product, totalPage });

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
module.exports=router