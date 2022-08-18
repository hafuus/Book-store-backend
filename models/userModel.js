const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true, //?
      },
      password: {
        type: String,
        required: true,
      },
      confirmPassword: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["user", "owner"],
        default: "user",
      },
    });

const userModel = mongoose.model("user" , userSchema)

module.exports = userModel
