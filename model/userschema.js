//imp mongoose
const mongoose=require('mongoose')

//create schema
//schema is created
const userschema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[3,'Must be atleast three charactors {VALUE}']
    },email:{
        type:String,
        require:true
        ,unique:true
        ,
        validator(value){
            if(!validator.isEmail(value))
{
    throw new Error('invalid Email')
}
        }
    },password:{
        type:String,
        require:true
    },
    profile:{
        type:String,
    }
})
//create model
const users=mongoose.model("users",userschema)

module.exports=users