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
        }
        catch (e) {
            return e;
        }
    }
}
module.exports = new CartService();