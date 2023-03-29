const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../error')
const authenticationMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('No token provided')
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
        const luckyNumber = Math.floot(Math.floor(Math.random() * 100))
        res.status(200).json({msg: "hello, smoke ", secret: 'here is your authorized data, your lucky number is ', luckyNumber})
    
    } catch(error){
        throw new UnauthenticatedError('Not authorized to access this route ') 
    }
}
module.exports = authenticationMiddleware