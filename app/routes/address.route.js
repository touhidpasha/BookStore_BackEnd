const express = require('express')
const route=express.Router();

const AddressController=require('../controllers/address.controller')

//create user
route.post('/createAddress',AddressController.createAddress)

//delete userName
route.delete('/deleteAddress',AddressController.deleteAddress)

//update user details
route.post('/updateAddress',AddressController.updateAddress)

//get user details
route.post('/getAddress',AddressController.getAddress)

module.exports=route
