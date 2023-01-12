const { application } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.port || 5000
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
},()=>{console.log("connected to database")})

app.get("/",(req,res)=>{
    res.send("ok")
})

app.listen(port,()=>{console.log(`server is connected at port number ${port}`)});
