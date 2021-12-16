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

const OrderSchema = mongoose.Schema(
    {
        email: String,
        itemId: String,
        orderNumber: Number,
        numberOfCopies: Number
    },
    {
        timestamps: true,
    }
);
const order = mongoose.model("Order", OrderSchema);
class OrderModel {
    async createOrder(info) {
        const temporder = new order({
            email: info.email,
            itemId: info.itemId,
            orderNumber: info.orderNumber,
            numberOfCopies: info.numberOfCopies
        });

        // create order database
        try {
            return await temporder.save();
        } catch (e) {
            return e;
        }

    }

    async deleteorder(info) {
        // create order database
        try {
            return await order.findByIdAndDelete ( info._id )
        } catch (e) {
            return e;
        }

    }

    async updateorder(info) {
        // create order database
        try {
            return await order.updateOne({ _id: info._id }, {
                orderNumber: info.orderNumber
            })
        } catch (e) {
            return e;
        }

    }

    async getOrder(info) {
        // create order database
        try {
            return await order.find({"email": info.email})
        } catch (e) {
            return e;
        }
    }
}
module.exports = new OrderModel();
