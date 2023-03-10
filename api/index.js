import express from 'express'
import morgan from 'morgan'
import apiRouter from '../src/routes/index.js'
import { dbConnect } from '../src/utils.js'

const app = express()

// Morgan is a logger, this gives us info in the console about requests we receive
app.use(morgan('dev'))
app.use(express.json())

dbConnect()

app.use('/api', apiRouter)

export default app
