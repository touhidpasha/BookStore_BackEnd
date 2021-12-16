const ProductModel = require("../models/product.model")
class ProductService {
    async createProduct(info) {
        try {
            return await ProductModel.createProduct(info)
        }
        catch (e) {
            return e;
        }
    }
    async deleteProduct(info) {
        try {
            return await ProductModel.deleteProduct(info)
        }
        catch (e) {
            return e;
        }
    }
    async updateProduct(info) {
        try {
            return await ProductModel.updateProduct(info)
        }
        catch (e) {
            return e;
        }
    }
    async getProduct(info) {
        try {
            return await ProductModel.getProduct(info)
        }
        catch (e) {
            return e;
        }
    }
    async getOneProduct(info) {
        try {
            return await ProductModel.getProductById(info)
        } catch (e) {
            return e;
        }
    }
}
module.exports = new ProductService();