//import env
require('dotenv').config()

//import express 
const express=require("express")
//import cors 
const cors=require("cors")
//imp router
const router=require("./Routers/router")
//imp connection 
require('./DB/connection')
//create server
const ehserver=express()

//use of cors
ehserver.use(cors())

//returns middleware that only parses json -js object

ehserver.use(express.json())
//use router
ehserver.use(router)

ehserver.use('/uploads',express.static('./uploads'))

//customize port
const PORT = 5000 || process.env
//to run server
ehserver.listen(PORT,()=>{
    console.log("server running at port:",PORT);
})
ehserver.get('/',(req,res)=>{
res.send("server okay")
})