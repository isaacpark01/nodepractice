console.log('Task Manager App')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('dotenv').config()
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error')

const port = process.env.PORT || 3000

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes 
app.get('/hello', (req,res) => {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
//random
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        console.log('sucess!')
        app.listen(port, console.log('SErver is listending on port ...' + port ))
    } catch (error){
        console.log(error)
    }
}


start()