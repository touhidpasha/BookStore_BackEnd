/* ************************************************************************
 * Purpose          : get the values from the controller and process them for the notes in fundo  notes                
 * 
 * @file            : note.contoller.js
 * @email          : Touhid pasha
 * @version         : 1.0
 * @since           : 9-8-2021
 * 
 **************************************************************************/
const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
    {
        email: String,
        itemId: String,
        numberOfItems: Number
    },
    {
        timestamps: true,
    }
);
const cart = mongoose.model("Cart", CartSchema);
class CartModel {
    async createCart(info) {
        const tempCart = new cart({
            email: info.email,
            itemId: info.itemId,
            numberOfItems: info.numberOfItems
        });

        // create cart database
        try {
            return await tempCart.save();

        } catch (e) {
            return e;
        }

    }

    async deleteCart(info) {
        // create cart database
        try {
            return await cart.findByIdAndDelete ( info._id )
        } catch (e) {
            return e;
        }
    }

    async updateCart(info) {
        // create cart database
        try {
            return await cart.updateOne({ _id: info._id }, {
                numberOfItems: info.numberOfItems
            })
        } catch (e) {
            return e;
        }

    }

    async getCart(info) {
        // create cart database
        try {
            return await cart.find({"email": info.email})
        } catch (e) {
            return e;
        }
    }

}
module.exports = new CartModel();
