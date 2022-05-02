const mongoose = require('mongoose')
const Schema =mongoose.Schema
const serviceSchema =new Schema({
    service:{
        type: String,
    },
    imgUrl:{
        type: String
    },
    description:{
        type: String
    },
    priceRange:{
        type:Number, 
    }
}
)
module.exports = mongoose.model('Service', serviceSchema)