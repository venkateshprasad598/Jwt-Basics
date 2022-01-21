require("dotenv").config()
require("express-async-errors")


const express = require("express")
const app = express()
const jwt = require("./routes/main")
const errorMsg = require("./middleware/error")
const notFoundMsg = require("./middleware/not-found")

//middleWare
app.use(express.static('./public'));
app.use(express.json())

app.use("/api/v1", jwt)
app.use(notFoundMsg)
app.use(errorMsg)


//port
const port = process.env.PORT || 3000

const start = async() => {
    try {
        await app.listen(port, console.log("Server is listening to port " + port))
    } catch (error) {
        console.log(error);
    }
}
start()