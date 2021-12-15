const AddressService = require('../services/address.service')
const utils = require("../utils/utils")


class AddressController {
    async createAddress(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })

        try {
            const data = await AddressService.createAddress({ ...req.body, "email": email })
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }

    async deleteAddress(req, res) {

        try {
            const data = await AddressService.deleteAddress(req.body)
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
    async updateAddress(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })

        try {
            const data = await AddressService.updateAddress({ ...req.body,"email": email})
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
    async getAddress(req, res) {
        var email = utils.verifyUser(req.body.token);
        if (!email)
            return res.status(401).send({ "message": "please login first" })

        try {
            const data = await AddressService.getAddress({ "email": email })
            console.log("address", data);
            return res.status(200).send(data)//[... data].slice(req.body.index*12,req.body.index*12+12))//.orderBy('price','asc'))
        } catch (e) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the user.",
            });
        }
    }
}
module.exports = new AddressController();