import { Router } from 'express'
import todoRouter from './todoRouter.js'
import listRouter from './listRouter.js'
import authRouter from './authRouter.js'

const apiRouter = Router()
export default apiRouter

apiRouter.use('/todo', todoRouter)
apiRouter.use('/list', listRouter)
apiRouter.use('/auth', authRouter)
