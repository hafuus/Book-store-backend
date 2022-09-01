const mongoose = require("mongoose")

const bookmarkSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    book: {
      type: mongoose.Types.ObjectId,
      ref: "Book",
    },
});

        
const bookmarkModel = mongoose.model("bookmark" ,bookmarkSchema )

module.exports = bookmarkModel;