//logic to resolve
//imp model
const users=require('../model/userschema')
const jwt=require('jsonwebtoken')
//register request

exports.register=async(req,res)=>{
const {username,email,password}=req.body
try{const existe=await users.findOne({email})
if(existe){
    //unprocesssable entity
    res.status(406).json('Account Already Exist!')
}
else{
    //create object for model

    const newuser=new users({
        username,
        email,
        password,
        profile:""

    })
    await newuser.save()
    res.status(200).json(newuser)
    console.log(newuser);
}
}  
catch(err){
res.status(401).json("registration failed--",err)
}  console.log("inside controller");
    
}

//login
exports.login=async(req,res)=>{
    console.log("inside the controller-login function");
    //get extract data from request body...
    console.log(req.body);
    const {email,password}=req.body
    try{
        const existinguser=await users.findOne({email,password})
        console.log(existinguser);
    if (existinguser) {
        //jwt token
        //sign method is used to create token-it excepts two arguments
        //payload-information ie secretly transmitted
        //secretkey-the key based on which the token is generated
        const token=jwt.sign({userid:existinguser._id},"secretedude18")
        res.status(200).json({existinguser,token})
    }
     else{
res.status(404).json("Invalid Email or Password")
     }}catch(err){
        res.status(401).json("login request failed due to :",err)
     } 
}
// exports.getallusers=async(req,res)=>{
    // const search=req.query.search
    // console.log(search);
    // const query={
    //     // regular expression,i-rmv casesensitivity
    //     fname:{
    //         $regex:search,$options:'i'
    
    //     }
    // }
        // try{
        //     const alluser=await users.find(query)
        //     res.status(200).json(alluser)
        // }
        // catch(err){
        //     res.status(401).json(`request failed due to :${err}`)
        // }
        
        // }



exports.edituser=async(req,res)=>{
const userid=req.payload
const {username,email,password,profile}=req.body
const profileimg=req.file?req.file.filename:profile
try{
    const updateuser=await users.findByIdAndUpdate({_id:userid},{username,email,password,profile:profileimg},{new:true})
    await updateuser.save()
    res.status(200).json(updateuser)
}
catch(err){
    res.status(401).json(err)
}

 }