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
            // var data={}
            // const res={...await OrderModel.getOrder(info)}
            // console.log("res "+JSON.stringify(res));
            // for (var item in res)
            //     {
            //         // console.log(res[item]._id);
            //         var book=await ProductModel.getProductById(res[item].itemId)
            //         console.log("book "+book);
            //         data={...data, book}
            //         console.log("data "+JSON.stringify(data));
            //     }

            // console.log("data-2 "+JSON.stringify(data));
            // return data;
        }
        catch (e) {
            return e;
        }
    }
   
}
module.exports = new OrderService();