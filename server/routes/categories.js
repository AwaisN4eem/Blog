const express=require('express')
const router=express.Router()
// const User=require('../models/User')
// const bcrypt=require('bcrypt')
// const Post=require('../models/Post')
const Category=require('../models/Category')
const verifyToken = require('../verifyToken')

//CREATE
router.post("/create",verifyToken,async (req,res)=>{
    try{
        const newComment=new Category(req.body)
        const savedComment=await newComment.save()
        res.status(200).json(savedComment)
    }
    catch(err){
        res.status(500).json(err)
    }
     
})

//UPDATE
router.put("/:id",verifyToken,async (req,res)=>{
    try{
       
        const updatedComment=await Category.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",verifyToken,async (req,res)=>{
    try{
        await Category.findByIdAndDelete(req.params.id)
        
        res.status(200).json("Comment has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})




//GET ALL COMMENTS
router.get("/",async (req,res)=>{
    try{
        const comments=await Category.find()
        res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router