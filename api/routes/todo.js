import { Router } from 'express'
import * as controller from '../controllers/todo.js'

const router = Router()
export default router

router.get('/', controller.getTodos)
router.post('/', controller.createTodo)

router.get('/:id', controller.getTodoById)
router.patch('/:id', controller.updateTodoById)
// This route needs to come before DELETE /:id to prevent overlap
router.delete('/completed', controller.deleteCompleted)
router.delete('/:id', controller.deleteTodoById)
