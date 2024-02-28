const express = require("express")
const user=require("../model/user")
const router= express.Router()

  router.post("/",async(req,res)=>{
      try {
        const newuser =  new user(req.body)
       
        await newuser.save()
        res.send(newuser)
    } catch (error) {
        console.log(error)
        
    }
})
  router.get("/",async(req,res)=>{
       try {
        const result =  await user.find()
       
        res.send(result)
    
    }  catch (error) {
        console.log(error)
        
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const result = await user.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.send(result)
        console.log(result)
    }
    catch (error) {
       console.log(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id);
        
        res.send(deletedUser);
    } catch (error) {
        console.error(error);
        
    }
});


module.exports=router