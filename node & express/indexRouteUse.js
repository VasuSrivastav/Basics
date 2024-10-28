const express = require('express');
const app = express();
const port =3000;
const itemRoute = require('./routes/item');
app.use('/items',itemRoute);
// :3000/
// :3000/items
// :3000/items/iddd


app.get('/',(req,res)=>{
    console.log("get hitted");
    res.send("hello world");
})

app.get('/data',(req,res)=>{
    console.log("get hitted dummyfile");
    res.sendFile("./dummy.html",{root:__dirname});
})

app.listen(port,()=>{
    console.log("app running on port "+ port);
})