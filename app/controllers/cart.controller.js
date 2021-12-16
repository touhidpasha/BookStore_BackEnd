const CartService = require('../services/cart.service')
const utils = require("../utils/utils")

class CartController {
    async createCart(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })

        try {
            const data = await CartService.createCart({ ...req.body, "email": email })
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async deleteCart(req, res) {
        try {
            const data = await CartService.deleteCart(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async updateCart(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })
        try {
            const data = await CartService.updateCart({...req.body, "email": email })
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: e.message || "Some error occurred while creating the user.",
            });
        }
    }

    async getCart(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })
        try {
            const data = await CartService.getCart({"email":email})
            return res.status(200).send(data)//[... data].slice(req.body.index*12,req.body.index*12+12))//.orderBy('price','asc'))
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
}
module.exports = new CartController();