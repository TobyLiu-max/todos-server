import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo, test } from '../controllers/todos'
const router: Router = Router()
router.get('/', test)
router.get('/todos', getTodos)
router.post('/add-todo', addTodo)
router.put('/edit-todo/:id', updateTodo)
router.delete('/delete-todo/:id', deleteTodo)

export default router
