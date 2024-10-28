const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Hello from items gett");
}   );
router.get('/jsons',(req,res)=>{
    res.json({msg:"Hello from items gett",
        "name":"saurabh",
        "age":25,
    });
}   );
router.get('/data',(req,res)=>{
    console.log("get hitted dummyfile");
    const path = require('path');
    res.sendFile(path.join(__dirname, '/../dummy.html'));
})
router.post('/',(req,res)=>{
    res.send("Hello from items post");
}   );
router.put('/:id',(req,res)=>{
    res.send("Hello from items put");
}   );
router.delete('/:id',(req,res)=>{
    res.send("Hello from items delete");
}   );
module.exports = router;