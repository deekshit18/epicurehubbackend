// //imp mongoose
// const mongoose=require('mongoose')

// //create schema
// //schema is created
// const messageschema=new mongoose.Schema({
    
//     message:{
//         type:String,
//         require:true

//     },send:{
//         type:String,
//         require:true

//     },recieve:{
//         type:String,
//         require:true

//     },
//     from:{
//         type:String,
//         require:true

//     },time:{
//         type:String,
//         require:true
//     },date:{
//         type:String,
//         require:true
//     },img:{
//         type:String
//     },userid:{
//         type:String,
//         require:true
//     }
// })
// //create model
// const messages=mongoose.model("messages",messageschema)

// module.exports=messages


// messageschema.js

const mongoose = require('mongoose');

const messageschema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const messages = mongoose.model('messages', messageschema);

module.exports = messages;
