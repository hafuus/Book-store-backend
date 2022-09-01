const express = require("express");
const dotenv = require ("dotenv");
const cors = require("cors")
const bodyParser = require("body-parser");

const userRoutes = require("./Routers/userRoutes")
const bookRoutes = require("./Routers/Book Routes")
const commentRoutes = require("./Routers/commentRoute")
const BookMarkRoutes = require("./Routers/BookmarkRouter")


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("images"));
//  app.use(bodyParser.urlencoded());

dotenv.config({ path: "./.env" }); 
require("./server")

app.use("/user" , userRoutes)
app.use("/book" , bookRoutes)
app.use("/comment" , commentRoutes)
app.use("/bookmark" , BookMarkRoutes)



port = 7000
app.listen(port, () => {
    console.log(`listning to port ${port}`)
    
})