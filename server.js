const express = require("express")
const { default: mongoose } = require("mongoose")
const morgan = require("morgan")
const app = express()
const cors = require('cors')
app.use(morgan("dev"))

app.use(express.json())
app.use(cors())
app.use('/tree', require('./routes/treeRoutes.js'))
// app.use('/service', require('./routes/formRoutes'))
app.use('/service', require('./routes/serviceRoutes'))
app.use('/form', require('./routes/formRoutes'))


mongoose.connect("mongodb+srv://jaconn4242:JeffAndMaxine@cluster0.cwtna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Connected to the Database")
})


app.use((err, req,res,next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})
app.listen(9000, () => {
    console.log("App is listening on port 9000")
})