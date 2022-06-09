const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://myfashions:myfa123@cluster0.8h2qd7g.mongodb.net/?retryWrites=true&w=majority");
};