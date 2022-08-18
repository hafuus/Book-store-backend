const mongoose = require("mongoose"); 

mongoose 
.connect(`mongodb+srv://${process.env.DB_Username}:${process.env.DB_Password}@cluster0.qxizy.mongodb.net/bookStore`)
.then(() => console.log("connected to DB"))



