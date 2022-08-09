const express = require("express");
const dotenv = require ("dotenv");

const userRoutes = require("./Routers/userRoutes")

const app = express();
app.use(express.json());


dotenv.config({ path: "./.env" }); 
require("./server")

app.use("/user" , userRoutes)


port = 7000
app.listen(port, () => {
    console.log(`listning to port ${port}`)
    
})