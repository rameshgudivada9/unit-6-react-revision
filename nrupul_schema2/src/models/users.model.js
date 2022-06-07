const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {  
      
       name:{type:String},
       email:{type:String,required:true,unique:true},
       addresses:[
           {
               place:{type:String},
               mandal:{type:String},
               district:{type:String},
               state:{type:String},
               pin_code:{type:Number},
               country:{type:String,default:"india"}


           }
        ]
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const User = mongoose.model("user",userSchema)
module.exports = User;