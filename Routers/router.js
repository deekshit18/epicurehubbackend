//import path to resolve request
const express=require("express")
//impport controllers
const usercontroller=require('../controllers/usercontroller')
const recipecontroller=require('../controllers/recipecontroller')
const messagecontroller=require('../controllers/messagecontroller')

//imp jwtmiddleware
const jwtmiddleware=require('../middleware/jwtmiddleware')

const multerConfig=require("../middleware/multermiddleware")

//create an object for router
const router =new express.Router()


//setup path
//syntax router httprequest('path'),()......
router.post('/user/register',usercontroller.register)
router.post('/user/login',usercontroller.login)
router.get('/user/alluser',jwtmiddleware,usercontroller.getallusers)

//addd recipes
router.post('/recipe/add',jwtmiddleware,multerConfig.single('fimage'),recipecontroller.addrecipe)
//message
router.post('/message/send',messagecontroller.send)
router.get('/message/allmessage',jwtmiddleware,messagecontroller.getallmessage)
router.delete('/message/remove/:id',jwtmiddleware,messagecontroller.deletemessage)


// 
router.get('/recipe/homerecipe',recipecontroller.gethomerecipe)
router.get('/recipe/allrecipe',jwtmiddleware,recipecontroller.getallrecipe)
router.get('/user/recipe',jwtmiddleware,recipecontroller.getuserrecipe)
// router.get('/user/profile:id',usercontroller.getuserprofile)
router.put('/user/edit',jwtmiddleware,multerConfig.single('profile'),usercontroller.edituser)

//recipeedit
router.put('/recipe/edit/:id',jwtmiddleware,multerConfig.single('fimage'),recipecontroller.edituserrecipe)
//delete
router.delete('/recipe/remove/:id',jwtmiddleware,recipecontroller.deleterecipe)
 //a register
 // login
//  router.post('/user/login')
//export router
module.exports= router