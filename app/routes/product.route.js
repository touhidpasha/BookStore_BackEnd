const express = require('express')
const route=express.Router();

const ProductController=require('../controllers/product.controller')

//create user
route.post('/createProduct',ProductController.createProduct)

//delete userName
route.delete('/deleteProduct',ProductController.deleteProduct)

//update user details
route.put('/updateProduct',ProductController.updateProduct)

//get user details
route.post('/getProduct',ProductController.getProduct)

//get user details
route.post('/getOneProduct',ProductController.getOneProduct)

module.exports=route
