require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express ();

const mainRouter = require('./routes/main')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
