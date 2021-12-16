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
const crypto = require("crypto");
const UserSchema = mongoose.Schema(
    {
        userName: String,
        firstName: String,
        lastName: String,
        contactNumber: Number,
        email: {
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
            firstName: info.firstName,
            lastName: info.lastName,
            password: crypto.createHash('md5').update(info.password).digest('hex'),
            email: info.email,
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
            return await user.deleteOne({ "email": info.email })
        } catch (e) {
            return e;
        }

    }

    async getUser(info) {
        // create user database
        try {
            return await user.findOne({ "email": info.email })
        } catch (e) {
            return e;
        }

    }
    saveOTP = (data, callback) => {
        return user.updateOne({
            email: data.email
        }, {
            OTP: data.OTP
        }, (err, data) => {
            return err ? callback(err, null) : callback(null, data);
        }
        )
    }

    updateToken = (data, callback) => {
        return user.updateOne({ email: data.email }, { token: data.token }, (err, data) => {
            return err ? callback(err, null) : callback(null, data)
        }
        )
    }
    // Update a note identified by the userId in the request
    updateUser = (data, callback) => {
        return user.updateOne(
            { email: data.email }, {
            password: data.password
        }
            , (err, data) => {
                return err ? callback(err, null) : callback(null, data);
            }
        )
    };
    //fetching data from DB
    fetchUserData = (data, callback) => {
        user.findOne({ email: data.email }, (err, data) => {
            return err ? callback(err, null) : callback(null, data)
        })
    }

}
module.exports = new UserModel();