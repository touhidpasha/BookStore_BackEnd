const OrderModel = require("../models/order.model")
class OrderService {
    async createOrder(info) {

        try {
            return await OrderModel.createOrder(info)
        }
        catch (e) {
            return e;
        }
    }
    async deleteOrder(info) {
        try {
            return await OrderModel.deleteOrder(info)
        }
        catch (e) {
            return e;
        }
    }
    async updateOrder(info) {
        try {
            return await OrderModel.updateOrder(info)
        }
        catch (e) {
            return e;
        }
    }
    async getOrder(info) {
        try {
            console.log("serv");
            return await OrderModel.getOrder(info)
        }
        catch (e) {
            return e;
        }
    }
}
module.exports = new OrderService();