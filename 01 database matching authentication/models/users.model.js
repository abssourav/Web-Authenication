const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: [true, "Email is required"]
    },
    
    password : {
        type : String,
        required: [true, "Password is required"]
    },
    createdOn:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Users", userSchema)