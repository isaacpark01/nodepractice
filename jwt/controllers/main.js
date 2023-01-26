const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) =>{
    const {username, password} = req.body
    console.log(username, password)

    if (!username || !password){
        throw new CustomAPIError ('please provide email and password', 400)
    }
    res.send('Fake Login/REgister/Signup Route')

}

// mongo
//joi
//




const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.floor(Math.random() * 100))
    res.send(200).json({msg: "hello, john doe", secret: 'here is your autheroiezed data, your lucky number is '${lucky}})
}