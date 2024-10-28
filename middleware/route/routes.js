const express = require('express');
const router = express.Router();

const authMW = function (req,res,next) {
    console.log("inside auth MW")
    // dummy data manually set
    req.user = {userID: 1, role: "student"};
    if(req.user){
        next();}
    else{
        res.json({success: false ,message: "unauthorized user role"})
    }
    
}

const isAdmin = function (req,res,next) {
    console.log("inside admin MW")
    if( req.user.role === "admin"){
        next();}
    else{
        res.json({success: false ,message: "unauthorized user, role is not admin"})
    }
    
}
const isStudent = function (req,res,next) {
    console.log("inside student MW")
    if( req.user.role === "student"){
        next();}
    else{
        res.json({success: false ,message: "unauthorized user, role is not student"})
    }
    
}



router.get('/admin',authMW,isAdmin ,(req,res)=>{
    console.log("Hello from admin gett");
    res.send("Hello from admin gett");
}   );

router.get('/student',authMW,isStudent ,(req,res)=>{
    console.log("Hello from student gett");
    res.send("Hello from student gett");
}   );
router.post('/',(req,res)=>{
    res.send("Hello from items post");
}   );
// router.put('/:id',(req,res)=>{
//     res.send("Hello from items put");
// }   );
// router.delete('/:id',(req,res)=>{
//     res.send("Hello from items delete");
// }   );
module.exports = router;