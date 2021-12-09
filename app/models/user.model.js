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
const UserSchema = mongoose.Schema(
    {
        userName: String,
        firstName: String,
        lastName: String,
        contactNumber: Number,
        emailAddress: {
            type: String,
            unique: true
        },
        password: String,
        token: String,
        OTP: Number


    },
    {
        timestamps: true,
    }
);
const user = mongoose.model("User", UserSchema);
class UserModel {
    async createUser(info) {
        const tempUser = new user({
            userName: info.userName,
            firstName: info.firstName,
            lastName: info.lastName,
            contactNumber: info.contactNumber,
            password: info.password,
            emailAddress: info.emailAddress,
            token: "",
            OTP: null
        });

        // create user database
        try {
            return await tempUser.save();
        } catch (e) {
            return e;
        }

    }

    async deleteUser(info) {
        // create user database
        try {
            return await user.deleteOne({ "emailAddress": info.emailAddress })
        } catch (e) {
            return e;
        }

    }

    async updateUser(info) {
        // create user database
        try {
            return await user.updateOne({ "emailAddress": info.emailAddress }, {
                userName: info.userName,
                firstName: info.firstName,
                lastName: info.lastName,
                contactNumber: info.contactNumber,
                password: info.password,
                emailAddress: info.emailAddress
            })
        } catch (e) {
            return e;
        }

    }

    async getUser(info) {
        // create user database
        try {
            return await user.findOne({ "emailAddress": info.emailAddress })
        } catch (e) {
            return e;
        }

    }

}
module.exports = new UserModel();