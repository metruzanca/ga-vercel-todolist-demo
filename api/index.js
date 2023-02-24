import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import lifecycle from './middleware/lifecycle.js'
import apiRouter from './routes/index.js'

const app = express()

// Morgan is a logger, this gives us info in the console about requests we receive
app.use(morgan('tiny'))
app.use(express.json())
app.use(lifecycle({
  async setup() {
    mongoose.set('strictQuery', false)
    //@ts-ignore
    mongoose.connect(process.env.DATABASE_URL)
  },
  async cleanup() {
    await mongoose.disconnect()
  }
}))

app.use('/api', apiRouter)

export default app
