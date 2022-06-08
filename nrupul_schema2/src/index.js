
const express = require("express");
const app=express();

app.use(express.json());
const userController = require("./controllers/usercontrollers");
const brandsController=require("./controllers/brandcontrollers")


app.use("/users",userController)
app.use("/brands",brandsController)


module.exports=app;