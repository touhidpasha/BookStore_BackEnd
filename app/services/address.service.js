const AddressModel = require("../models/address.model")
class AddressService {
    async createAddress(info) {
        try {
            return await AddressModel.createAddress(info)
        }
        catch (e) {
            return e;
        }
    }
    async deleteAddress(info) {
        try {
            return await AddressModel.deleteAddress(info)
        }
        catch (e) {
            return e;
        }
    }
    async updateAddress(info) {
        try {
            return await AddressModel.updateAddress(info)
        }
        catch (e) {
            return e;
        }
    }
    async getAddress(info) {
        try {
            return await AddressModel.getAddress(info)
        }
        catch (e) {
            return e;
        }
    }
}
module.exports = new AddressService();