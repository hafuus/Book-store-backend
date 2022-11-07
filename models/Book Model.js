const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title: {
      type:String,
      required : true,
    },
    Author: {
      type:String,
      required : true,
    },
    description:{
      type:String,
      required : true,
    },
    image: String,
    Book: {
      type: mongoose.Types.ObjectId,
      ref: "Books",
    },
});

        
const BookModel = mongoose.model("Books" , BookSchema)

module.exports = BookModel;
