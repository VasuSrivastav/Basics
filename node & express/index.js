const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    console.log("get hitted");
    res.send("hello world");
})

app.listen(port,()=>{
    console.log("app running on port "+ port);
})

