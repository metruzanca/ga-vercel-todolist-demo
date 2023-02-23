import { Router } from 'express'
import todoRouter from './todo.js'

const apiRouter = Router()
export default apiRouter

apiRouter.use('/todo', todoRouter)
