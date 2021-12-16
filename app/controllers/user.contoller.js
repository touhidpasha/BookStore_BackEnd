const UserService = require('../services/user.service')
const middlewares = require("../middlewares/user.middleware.js")
const jwt = require("../utils/utils")
const crypto = require('crypto')

class UserController {
    async createUser(req, res) {
        try {
            const data = await UserService.createUser(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async deleteUser(req, res) {
        try {
            const data = await UserService.deleteUser(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async updateUser(req, res) {
        try {
            const data = await UserService.updateUser(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
    async getUser(req, res) {

        try {
            const data = await UserService.getUser(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    //method for user-login
    login = (req, res) => {
        var token;
        UserService.login({ "email": req.body.email }, (err, data) => {
            if (err) {
                return res.status(401).send({ message: "user not found" })
            } else if ((crypto.createHash('md5').update(req.body.password).digest('hex')) === data.password) { //  token=jwt.generateToken(req.body.email)
                token = jwt.generateToken(req.body.email);
                UserService.updateToken({ "email": req.body.email, "token": token }, (err, data) => {
                    if (err)
                        return res.status(500).send({ "message": "error occured while updatting" })
                    else
                        return res.status(200).send({ "token": token })
                })
            } else
                return res.status(401).send({ message: "credentials are not correct" })
        })
    }
    //forgot psw impl

    forgotPassword = (req, res) => {
        UserService.forgotPassword(req.body.email, (err, data) => {
            var OTP;
            if (err)
                return res.status(404).send({ "msg": "user not found" })
            else {
                OTP = middlewares.sendOTP(data.email);
                UserService.saveOTP({ "email": data.email, "OTP": OTP }, (err, info) => {
                    if (err) {
                        return res.status(500).send({ "msg": "some issue in server,try again" })
                    }
                    else {
                        return res.status(200).send({ "msg": "otp has been delivered to " + data.email })

                    }
                })
            }
        })
    }

    //rest password
    verifyOTP = (req, res) => {
        UserService.fetchUserData(req.body, (err, data) => {
            if (err)
                return (res.status(500).send({ "message": "error occured in server" }))
            else {
                if (req.body.OTP == data.OTP) //here for testing i'am hardcoding
                {
                    return res.status(200).send({ "message": "correct OTP" })
                }
                else {
                    return res.status(422).send({ "message": "wrong OTP" })
                }
            }
        })
    }

    //rest password
    resetPassword = (req, res) => {
        UserService.fetchUserData(req.body, (err, data) => {
            if (err)
                return (res.status(500).send({ "message": "error occured in server" }))
            else {
                UserService.resetPassword(req.body, (crypto.createHash('md5').update(req.body.password).digest('hex')), (err, data) => {
                    if (err)
                        return res.status(500).send({ "message": "error occured while updatting" })
                    else
                        return res.status(200).send({ "message": "password updated successfully" })
                })
            }
        })
    }
}
module.exports = new UserController();