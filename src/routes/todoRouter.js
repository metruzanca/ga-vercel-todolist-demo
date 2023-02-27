import { Router } from 'express'
import * as controller from '../controllers/todoController.js'

const router = Router()
export default router

// Create
router.post('/', controller.createTodo)
// Read
router.get('/', controller.getTodos)
// Update
router.patch('/:id', controller.updateTodoById)
// Delete
router.delete('/completed', controller.deleteCompleted)
