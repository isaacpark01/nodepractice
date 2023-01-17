require('dotenv').config()

const connectDB = require('./db/connect')

const Product = require('./models/product');

const jsonProducts = require('./products.json')


const start = async () =>{
    try{
        await connectDB(processenv.MONGO_URI)
    } catch (error){
        console.log(error)
    }
}

start()

