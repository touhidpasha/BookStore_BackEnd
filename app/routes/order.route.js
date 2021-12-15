const express = require('express')
const route=express.Router();

const OrderController=require('../controllers/order.controller')

//create user
route.post('/createOrder',OrderController.createOrder)

//delete userName
route.post('/deleteOrder',OrderController.deleteOrder)

//update user details
route.put('/updateOrder',OrderController.updateOrder)

//get user details
route.post('/getId',OrderController.getId)


module.exports=route
