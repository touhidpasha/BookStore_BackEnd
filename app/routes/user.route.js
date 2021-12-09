const express = require('express')
const route=express.Router();

const UserController=require('../controllers/user.contoller')

//create user
route.post('/createUser',UserController.createUser)

//delete userName
route.delete('/deleteUser',UserController.deleteUser)

//update user details
route.put('/updateUser',UserController.updateUser)

//get user details
route.get('/getUser',UserController.getUser)

module.exports=route
