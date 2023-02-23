import { Router } from 'express'
import todoRouter from './todoRouter.js'

const apiRouter = Router()
export default apiRouter

apiRouter.use('/todo', todoRouter)
