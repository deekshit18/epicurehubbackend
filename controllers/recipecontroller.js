const recipes =require('../model/recipeschema');

exports.addrecipe=async(req,res)=>{

    console.log("inside recipe controller");
    const userid=req.payload
    console.log(userid);
    const fimage=req.file.filename
    console.log(fimage);
    const {rdate,uname,uemail,profiles,fname,ingredients,instructions,foodType}=req.body
    console.log(`${rdate},${uname},${uemail},${profiles},${fname},${fimage},${ingredients},${instructions},${foodType},${userid}`);
    try{
    const Existingrecipe=await recipes.findOne({fimage})
    console.log(Existingrecipe); 
    if (Existingrecipe) {
      res.status(406).json('CopyRight Issue! Upload Another Image')  
    }
    else{

        const newrecipes=new recipes({
            rdate,uname,uemail,profiles,fname,fimage,ingredients,instructions,foodType,userid
        })
        await newrecipes.save()
        res.status(200).json(newrecipes)
    }
    }catch(err){
    res.status(401).json(`request failed due to ${err}`)
    }
    // res.status(200).json('add recipe req')
    
    }

    //homeproject
exports.gethomerecipe=async(req,res)=>{

    try{
        const homerecipe=await recipes.find().limit(3)
        res.status(200).json(homerecipe)
    }
    catch(err){
        res.status(401).json(`request failed due to :${err}`)
    }
    
    }
    

//allprojects
exports.getallrecipe=async(req,res)=>{
    const search=req.query.search
    console.log(search);
    const query={
        // regular expression,i-rmv casesensitivity
        fname:{
            $regex:search,$options:'i'
    
        }
    }
        try{
            const allrecipe=await recipes.find(query)
            res.status(200).json(allrecipe)
        }
        catch(err){
            res.status(401).json(`request failed due to :${err}`)
        }
        
        }
        //userrecipe
        exports.getuserrecipe=async(req,res)=>{
        const userid=req.payload
            try{
                const userrecipe=await recipes.find({userid})
                res.status(200).json(userrecipe)
            }
            catch(err){
                res.status(401).json(`request failed due to :${err}`)
            }
            
            }
//edit
            exports.edituserrecipe=async(req,res)=>{
                const {id}=req.params
                const userid=req.payload
                const {rdate,uname,uemail,profiles,fname,fimage,ingredients,instructions,foodType}=req.body
                const ufimage=req.file?req.file.filename:fimage

                try{
                    const Existingrecipe=await recipes.findOne({ufimage})
    console.log(Existingrecipe); 
    if (Existingrecipe) {
      res.status(406).json('CopyRight Issue! Upload Another Image')  
    }
    else{
                    const updaterecipe=await recipes.findByIdAndUpdate({_id:id},{rdate,uname,uemail,profiles,fname,fimage:ufimage,ingredients,instructions,foodType,userid},{new:true})
                    await updaterecipe.save()
                    res.status(200).json(updaterecipe)
                }}
                catch(err){
    res.status(401).json(err)
                }
            }
            exports.deleterecipe=async(req,res)=>{
                const {id}=req.params
                try{
                    const removerecipe=await recipes.findByIdAndDelete({_id:id})
                    res.status(200).json(removerecipe)
    
                }
                catch(err){
                    res.status(401).json(err)
     
                }
            }