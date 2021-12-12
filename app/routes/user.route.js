const express = require('express')
const route = express.Router();

const UserController = require('../controllers/user.contoller')

//create user
route.post('/', UserController.createUser)

//delete userName
route.delete('/deleteUser', UserController.deleteUser)

//update user details
route.put('/updateUser', UserController.updateUser)

//get user details
route.get('/getUser', UserController.getUser)

//logifor user
route.post('/login', UserController.login)
// route.post('/login', UserController.login)

//forgot password implementation
route.put('/forgotPassword', UserController.forgotPassword)

//OTP verification
route.post('/verifyOTP', UserController.verifyOTP)

//link for resetting password
route.put('/resetPassword', UserController.resetPassword)

module.exports = route
