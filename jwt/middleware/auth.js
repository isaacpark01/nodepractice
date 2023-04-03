const jwt = require('jsonwebtoken')
const {UnauthenticatedError } = require('../errors')
const authenticationMiddleware  = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('No token provided ')
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify (token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id,username} 
        next()
        const luckyNumber = Math.floor(Math.floor(Math.random() * 100))
        res.status(200).json({msg: "hello, john doe", secret: 'here is your autheroiezed data, your lucky number is ',luckyNumber })
    } catch (error){
        throw new UnauthenticatedError('Not authorized to acces this route ')
    }
    
}

module.exports = authenticationMiddleware

