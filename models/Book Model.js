const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title: String,
    Author: String,
    description: String,
    image: String,
    Book: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
});

        
const BookModel = mongoose.model("Books" , BookSchema)

module.exports = BookModel;
