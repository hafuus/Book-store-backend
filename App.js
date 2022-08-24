const express = require("express");
const dotenv = require ("dotenv");
const cors = require("cors")

const userRoutes = require("./Routers/userRoutes")
const bookRoutes = require("./Routers/Book Routes")
const commentRoutes = require("./Routers/commentRoute")




const app = express();

app.use(express.json());
app.use(cors());


dotenv.config({ path: "./.env" }); 
require("./server")

app.use("/user" , userRoutes)
app.use("/book" , bookRoutes)
app.use("/comment" , commentRoutes)




port = 7000
app.listen(port, () => {
    console.log(`listning to port ${port}`)
    
})