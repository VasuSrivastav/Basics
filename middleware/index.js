const express = require('express');
const app = express();
const port = 3000;

const router = require('./route/routes');
app.use('/portal',router);
// as data comes from body need to convert in json or need to tell that json 
// inbuild middleware
app.use(express.json());

// custom middleware
// const loggingMW = function (req,res,next) {
//     console.log("inside logging MW")
//     next();

// }
// const authMW = function (req,res,next) {
//     console.log("inside auth MW")
//     next();
    
// }
// const validationMW = function (req,res,next) {
//     console.log("inside validationMW MW")
//     next();
    
// }
// app.use(loggingMW)
// app.use(authMW)
// app.use(validationMW)

app.get('/',(req,res)=>{
    console.log("get hitted");
    res.send("hello world MW");
}    
)

app.post('/',(req,res)=>{
    console.log("get hitted");
    console.log(req.body);
    res.send("hello world MW");
})

app.listen(port,()=>{
    console.log("app running on port "+ port);
})