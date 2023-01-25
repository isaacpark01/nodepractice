const login = async (req, res) ={
    res.send('Fake Login/REgister/Signup Route')

}


const dashboard = async (req, res) => {
    res.send(200).json({msg: "hello, john doe", secret: 'here is your autheroiezed data, your lucky number is '${lucky}})
}