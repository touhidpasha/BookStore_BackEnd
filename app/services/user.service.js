const UserModel = require("../models/user.model")
class UserService {
    async createUser(info) {
        try {
            return await UserModel.createUser(info)
        }
        catch (e) {
            return e;
        }
    }
    async deleteUser(info) {
        try {
            return await UserModel.deleteUser(info)
        }
        catch (e) {
            return e;
        }
    }
    async updateUser(info) {
        try {
            return await UserModel.updateUser(info)
        }
        catch (e) {
            return e;
        }
    }
    async getUser(info) {
        try {
            return await UserModel.getUser(info)
        }
        catch (e) {
            return e;
        }
    }
}
module.exports = new UserService();