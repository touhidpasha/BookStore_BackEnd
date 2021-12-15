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

const AddressSchema = mongoose.Schema(
    {
        email: { type: String, unique: true },
        name: String,
        phoneNumber: Number,
        pinCode: Number,
        locality: String,
        address: String,
        city: String,
        landmark: String,
        type: String



    },
    {
        timestamps: true,
    }
);
const address = mongoose.model("Address", AddressSchema);
class AddressModel {
    async createAddress(info) {
        // console.log("model create prod " + JSON.stringify(info))
        const tempAddress = new address({
            email: info.email,
            name: info.name,
            phoneNumber: info.phoneNumber,
            pinCode: info.pinCode,
            locality: info.locality,
            address: info.address,
            city: info.city,
            landmark: info.landmark,
            type: info.type,

        });

        // create address database
        try {
            return await tempAddress.save();

        } catch (e) {
            return e;
        }

    }

    async deleteAddress(info) {
        // create address database
        try {
            return await address.deleteOne({ "email": info.email })
        } catch (e) {
            return e;
        }

    }

    async updateAddress(info) {
        // create address database
        try {
            return await address.updateOne({ "email": info.email }, {
                email: info.email,
                name: info.name,
                phoneNumber: info.phoneNumber,
                pinCode: info.pinCode,
                locality: info.locality,
                address: info.address,
                city: info.city,
                landmark: info.landmark,
                type: info.type,

            })
        } catch (e) {
            return e;
        }

    }

    async getAddress(info) {
        // create address database
        try {
            return await address.findOne({ email: info.email })
        } catch (e) {
            return e;
        }

    }

}
module.exports = new AddressModel();
