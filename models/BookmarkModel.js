const mongoose = require("mongoose")

const bookmarkSchema = mongoose.Schema({
    User: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    Book: {
      type: mongoose.Types.ObjectId,
      ref: "Books",
    },
});

        
const bookmarkModel = mongoose.model("bookmark" ,bookmarkSchema )

module.exports = bookmarkModel;