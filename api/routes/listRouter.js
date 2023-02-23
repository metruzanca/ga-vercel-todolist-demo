import { Router } from 'express'
import * as controller from '../controllers/listController.js'

const router = Router()
export default router

router.get('/', controller.getLists)
router.post('/', controller.createList)
router.patch('/:id', controller.updateList)
router.delete('/:id', controller.deleteList)
