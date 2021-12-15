const express = require('express')
const route=express.Router();

const CartController=require('../controllers/cart.controller')

//create user
route.post('/createCart',CartController.createCart)

//delete userName
route.post('/deleteCart',CartController.deleteCart)

//update user details
route.put('/updateCart',CartController.updateCart)

//get user details
route.post('/getCart',CartController.getCart)


module.exports=route
