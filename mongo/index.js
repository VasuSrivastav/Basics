const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users')
const connectDB = require('./db');

// body parser
app.use(express.json());
// Connect to MongoDB
connectDB();
app.use('/userapi',users)

app.get('/',(req,res)=>{
    console.log("get hitted");
    res.send("hello world");
})

app.listen(port,()=>{
    console.log("app running on port "+ port);
})

