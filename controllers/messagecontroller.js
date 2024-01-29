// const messages =require('../model/messageschema');

// // exports.send=async(req,res)=>{

// //     console.log("inside message controller");
// //     const {message,send,recieve,from,time,date}=req.body
// //     console.log(`${message},${send},${recieve},${from},${time},${date}`);
// //     try{
// //     // const Existingrecipe=await recipes.findOne({fimage})
// //     // console.log(Existingrecipe);
// //     // if (Existingrecipe) {
// //     //   res.status(406).json('CopyRight Issue! Upload Another Image')  
// //     // }
// //     // else{

// //         const newmessage=new messages({
// //             message,send,recieve,from,time,date
// //         })
// //         await newmessage.save()
// //         res.status(200).json(newmessage)
// //     // }
// //     }catch(err){
// //     res.status(401).json(`request failed due to ${err}`)
// //     }
// //     // res.status(200).json('add recipe req')
    
// //     }
//     exports.send=async(req,res)=>{

//         console.log("inside recipe controller");
//         const userid=req.payload
//         console.log(userid);
//         const img=req.file.filename
//         console.log(img);
//         const {message,send,recieve,from,time,date}=req.body

//         console.log(`${message},${send},${recieve},${from},${time},${date}`);
//         try{
            
//             const newmessage=new recipes({
//                 message,send,recieve,from,time,date,img,userid
//             })
//             await newmessage.save()
//             res.status(200).json(newmessage)
//         }
//         catch(err){
//         res.status(401).json(`request failed due to ${err}`)
//         }
//         // res.status(200).json('add recipe req')
        
//         }
    
// message-controller.js

const messages = require('../model/messageschema');

exports.send = async (req, res) => {
  console.log('inside message controller');
  const userid = req.payload;
  const { message, sender, receiver, time, date } = req.body;

  try {
    const newMessage = new messages({
      message,
      sender,
      receiver,
      time,
      date,
    });

    await newMessage.save();
    res.status(200).json(newMessage);
  } catch (err) {
    res.status(401).json(`request failed due to ${err}`);
  }
};


///message all
exports.getallmessage=async(req,res)=>{
  
      try{
          const allmessage=await messages.find()
          res.status(200).json(allmessage)
      }
      catch(err){
          res.status(401).json(`request failed due to :${err}`)
      }
      
      }


      exports.deletemessage=async(req,res)=>{
        const {id}=req.params
        try{
            const removemessage=await messages.findByIdAndDelete({_id:id})
            res.status(200).json(removemessage)

        }
        catch(err){
            res.status(401).json(err)

        }
    }