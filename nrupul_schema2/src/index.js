
const express = require("express");
const app=express();

app.use(express.json());
const userController = require("./controllers/usercontrollers");
const brandsController=require("./controllers/brandcontrollers");
 const reviewsController = require("./controllers/review.controllers");
 const productsController = require("./controllers/products.controller");




app.use("/users",userController);
app.use("/brands",brandsController);
app.use("/review",reviewsController);
app.use("/products",productsController);


module.exports=app;