const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()




mongoose.connect("mongodb+srv://jaconn4242:JeffAndMaxine@cluster0.cwtna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")



app.listen(9000, () => {
    console.log("App is listening on port 9000")
})