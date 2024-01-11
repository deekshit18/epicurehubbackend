

const mongoose=require('mongoose')

//create schema
//schema is created
const recipeschema=new mongoose.Schema({
    rdate:{
        type:String,
        require:true,
    },
    uname:{
        type:String,
        require:true,
    },uemail:{
        type:String,
        require:true
        
    },
    profiles:{
        type:String,
    },
fname:{
    type:String,
    require:true
},fimage:{
    type:String,
    require:true
},ingredients:{
    type:String,
    require:true
},

instructions:{
    type:String,
    require:true
},
userid:{
    type:String,
    require:true
}
})
const recipes=mongoose.model("recipes",recipeschema)
module.exports=recipes