const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const 

const register = async (req,res) =>{
    const{name, email, password} = req.body
    if (!name || !email || !password){
        
    }
    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res) =>{
    res.send("login user")
}

module.exports = {
    register, 
    login 
}