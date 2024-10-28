const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// router

// crud ops
// view /read
router.get('/',async (req , res)=>{
    try{
        const users=  await User.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json(
            {message: error.message,
             success: false}
        )
    }
})

// post / create
// wese yaha pe /users aana tha 
router.post('/',async (req , res)=>{
    try{
        const {name, age , weight} = req.body;
        const newUser = new User({name, age, weight})
        
        await newUser.save();
        res.status(200).json({
            user: newUser,
            success: true
        });
    }
    catch(error){
        res.status(500).json(
            {
            message:error.message,
            success:false
        })
    }
})

// update
router.put('/:id',async (req , res)=>{
    const {id} = req.params
    const {name, age , weight} = req.body;
    try{
        
        const updatedUser = await User.findByIdAndUpdate(id,{name, age, weight})
        
        if(!updatedUser){
            res.json({
                message: "User not found"
            })
        }
        res.status(200).json({
            user: updatedUser,
            success: true
        })
        
    }
    catch(error){
        res.status(500).json(
            {
            message:error.message,
            success:false
        })
    }
})

// delete
router.delete('/:id',async (req , res)=>{
    const {id} = req.params
    try{
        
        const deletedUser = await User.findByIdAndDelete(id)
        
        if(!deletedUser){
            res.status(200).json({
                message: "User not found",
                success: true
            })
        }

        else{
            res.status(200).json({
                user: deletedUser,
                success: true
            })
        }
        
    }
    catch(error){
        res.status(500).json(
            {
            message:error.message,
            success:false
        })
    }
})

module.exports = router;