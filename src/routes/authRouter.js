import { Router } from 'express'
import * as controller from '../controllers/authController.js'

const router = Router()
export default router

router.post('/login', controller.login)
router.post('/register', controller.register)
router.post('/changePassword', controller.changePassword)
