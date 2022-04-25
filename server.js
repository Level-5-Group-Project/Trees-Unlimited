const express = require("express")
const { default: mongoose } = require("mongoose")
const morgan = require("morgan")
const app = express()

app.use(morgan("dev"))


mongoose.connect("mongodb+srv://jaconn4242:JeffAndMaxine@cluster0.cwtna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Connected to the Database")
})



app.listen(9000, () => {
    console.log("App is listening on port 9000")
})