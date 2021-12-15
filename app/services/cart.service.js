const CartModel = require("../models/cart.model")
const ProductModel = require("../models/product.model")
class CartService {
    async createCart(info) {
        try {
            return await CartModel.createCart(info)
        }
        catch (e) {
            return e;
        }
    }
    async deleteCart(info) {
        try {
            return await CartModel.deleteCart(info)
        }
        catch (e) {
            return e;
        }
    }
    async updateCart(info) {
        try {
            return await CartModel.updateCart(info)
        }
        catch (e) {
            return e;
        }
    }
    async getCart(info) {
        try {
            return await CartModel.getCart(info)
            // var data={}
            // const res={...await CartModel.getCart(info)}
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
module.exports = new CartService();