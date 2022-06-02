

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