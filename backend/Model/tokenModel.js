const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    token:{
        type:String,
        require:true
    },
    userId:{
        type:string
    }
})

module.exports = mongoose.model("Token",TokenSchema)