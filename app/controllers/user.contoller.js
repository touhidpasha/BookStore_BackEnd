const UserService = require('../services/user.service')

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
}
module.exports = new UserController();