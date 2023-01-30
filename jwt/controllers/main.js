const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) =>{
    const {username, password} = req.body
    console.log(username, password)

    if (!username || !password){
        throw new CustomAPIError ('please provide email and password', 400)
    }

    const id = new Date().getDate()
    
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn : '30d'})
    
    res.status(200).json({msg: 'user created', token})

}

// mongo
//joi
//check in controller




const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.floor(Math.random() * 100))
    res.status(200).json({msg: "hello, john doe", secret: 'here is your autheroiezed data, your lucky number is ',luckyNumber })
}

module.exports = { login, dashboard}