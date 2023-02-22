const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, "please prove a true name"], 
        minlength: 3, 
        maxlength: 50, 
    },
    email:{
        type:String, 
        required:[true, "please prove a a email  "], 
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
        "please provide valid email"],
        unique: true, 

}, 
    password:{
        type:String, 
        required : [true, "please enter a password"],
        minlength: 6, 
    
}
} dfe
)

module.exports = mongoose.model('User', UserSchema)
