const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  userDetail: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
    role:{
      type:String,
      default:"user",
      enum:['admin' , 'user']
    },
    isVerified:{
      type:Boolean,
      default:false
    },
    userDetail:{
      
    }
});

module.exports = mongoose.model("User", UserSchema);
