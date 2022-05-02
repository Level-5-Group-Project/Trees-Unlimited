const mongoose = require('mongoose')
const Schema = mongoose.Schema
const formSchema = new Schema({
    firstName:{
        type:String
    }, 
    lastName:{
        type:String
    },
    requestedCall:{
        type: String
    },
    email:{
        type: String
    },
    phoneNumber:{
        type:Number
    },
    comment: {
        type: String
    }
})

module.exports = mongoose.model('Form', formSchema)