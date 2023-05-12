console.log("taskmanager app")
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-cound')
const errorHandlerMiddleware = require('./middleware/error');
const { resourceLimits } = require('worker_threads');

const port = process.env.PORT || 3000

//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.get('/hello', (req,res) =>{
    res.send("task manager app")

})

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

//random

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log('success!')
        app.listen(port, console.log("server is listening on port ${port} "))

    }catch(error){
        console.log(error)
    }
}

start()



ewpompwaejmgo'ierjaseinorgoiergn