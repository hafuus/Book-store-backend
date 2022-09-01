const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comments: String,
    Author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    // Book: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
});

        
const commentModel = mongoose.model("comments" ,commentSchema )

module.exports = commentModel;