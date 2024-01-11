//import multer
const multer=require('multer')
//diskstorgae is used to create the storaGE place
const storage=multer.diskStorage({
    //destination:location in which the file is stored
    //filename:the name in which the file is stored
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC)
// const filename=`image-${Date.now()}-${file.originalname}`
const filename=`image-${file.originalname}`

callback(null,filename)
    }
})


//filefilter
const fileFilter=(req,file,callback)=>{

    if (file.mimetype==='image/png' || file.mimetype==='image/jpg'|| file.mimetype==='image/jpeg') {
        callback(null,true)  

    }
    else{
        callback(null,false)
        return callback(new Error('only png,jpg and jpeg files are allowed'))
    }
}

//create multer configure
const multerConfig=multer({
    storage,fileFilter
})

//export multer

module.exports=multerConfig