const OrderService = require('../services/order.service')
const utils = require("../utils/utils")

class OrderController {
    async createOrder(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })
        try {
            const data = await OrderService.createOrder({ ...req.body, "email": email })
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async deleteOrder(req, res) {
        try {
            const data = await OrderService.deleteOrder(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async updateOrder(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })
        try {
            const data = await OrderService.updateOrder({...req.body, "email": email })
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: e.message || "Some error occurred while creating the user.",
            });
        }
    }
    async getId(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })

        try {
            const data = await OrderService.getOrder({"email":email})
            return res.status(200).send(data)//[... data].slice(req.body.index*12,req.body.index*12+12))//.orderBy('price','asc'))
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
}
module.exports = new OrderController();