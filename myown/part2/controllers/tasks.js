const { restart }  = require('nodemon')
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper ( async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask = asyncWrapper(async (req, res, next) => {
    const{id: taskID} = req.params
    const task =  await Task.findOne({_id:taskID})
    res.status(200).json({task})
    
})

