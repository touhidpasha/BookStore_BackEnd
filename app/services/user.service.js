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
    //lognin method
    login = (data, callback) => {
        UserModel.fetchUserData(data, (err, data) => {
            return err ? callback(err, null) : callback(null, data);
        })
    };

    //forgot password method
    forgotPassword = (email, callback) => {
        UserModel.fetchUserData({ "email": email }, (err, data) => {
            return err ? callback(err, null) : callback(null, data)
        })
    };

    //reset pswd method
    resetPassword = (info, password, callback) => {
        UserModel.updateUser({ "email": info.email, "password": password }, (err, data) => {
            return err ? callback(err, null) : callback(null, data)
        })

    }
    saveOTP = (data, callback) => {
        UserModel.saveOTP(data, (err, data) => {
            return err ? callback(err, null) : callback(null, data);
        })
    }

    fetchUserData = (data, callback) => {
        UserModel.fetchUserData(data, (err, data) => {
            return err ? callback(err, null) : callback(null, data);
        })
    }

    updateToken = (data, callback) => {
        UserModel.updateToken(data, (err, data) => {
            return err ? callback(err, null) : callback(null, data);
        })
    }
}
module.exports = new UserService();