/* ************************************************************************
 * Purpose          : get the values from the controller and process them for the notes in fundo  notes                
 * 
 * @file            : note.contoller.js
 * @author          : Touhid pasha
 * @version         : 1.0
 * @since           : 9-8-2021
 * 
 **************************************************************************/
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        author: String,
        title: String,
        image: String,
        price: Number,
        description: String



    },
    {
        timestamps: true,
    }
);
const product = mongoose.model("Product", ProductSchema);
class ProductModel {
    async createProduct(info) {
        console.log("model create prod "+JSON.stringify(info))
        const tempProduct = new product({
            author: info.author,
            title: info.title,
            image: info.image,
            price: info.price,
            description: info.description
        });

        // create product database
        try {
            return await tempProduct.save();
            
        } catch (e) {
            return e;
        }

    }

    async deleteProduct(info) {
        // create product database
        try {
            return await product.deleteOne({ "title": info.title })
        } catch (e) {
            return e;
        }

    }

    async updateProduct(info) {
        // create product database
        try {
            return await product.updateOne({ "title": info.title }, {
                author: info.author,
                title: info.title,
                image: info.image,
                basePrice: info.basePrice,
                description: info.description
            })
        } catch (e) {
            return e;
        }

    }

    async getProduct(info) {
        // create product database
        try {
            return await product.find()
        } catch (e) {
            return e;
        }

    }

}
module.exports = new ProductModel();
