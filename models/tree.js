const mongoose = require('mongoose')
const Schema =mongoose.Schema
const treeSchema =new Schema({
    name:{
        type: String,
    },
    type:{
        type:String, 
        
    },
    color:{
        type: String,
        
    },
    imgUrl:{
        type: String
    },
    description:{
        type: String
    },
    size:{
        type:String, 
        
    },
    price:{
        type:Number, 
        
    }
}
)
module.exports = mongoose.model('Tree', treeSchema)