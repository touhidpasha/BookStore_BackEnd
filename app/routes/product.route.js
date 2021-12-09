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
route.get('/getProduct',ProductController.getProduct)

module.exports=route
