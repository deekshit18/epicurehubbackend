const mongoose=require('mongoose')

const connectionstring=process.env.DATABASE

//
mongoose.connect(connectionstring).then(()=>{
    console.log('mongodb');
}).catch((err)=>{
    console.log("mongodb failed",err);
})