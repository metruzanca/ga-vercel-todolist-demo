import todo from '../models/todo.js'
import { parseObjectId, toBool } from '../utils.js'

export async function getTodos(req, res) {
  const items = await todo.find(req, res)
  res.json(items)
}

export async function createTodo(req, res) {
  const { text, done } = req.body
  const item = await todo.create({
    text,
    done,
  })
  res.json(item)
}

export async function getTodoById(req, res) {
  const _id = parseObjectId(req.params.id)
  const item = await todo.find({ _id })
  res.json(item)
}

export async function updateTodoById(req, res) {
  const _id = parseObjectId(req.params.id)
  const { text } = req.query
  // Mongoose doesn't auto convert to bool, we need to do it manually
  const done = toBool(req.query.done)
  const item = await todo.findByIdAndUpdate({ _id }, { text, done }, { new: true })
  res.json(item)
}

export async function deleteTodoById(req, res) {
  const _id = parseObjectId(req.params.id)
  const item = await todo.findByIdAndDelete({ _id })
  res.json(item)
}

export async function deleteCompleted(req, res) {
  const items = await todo.deleteMany({ done: true })
  res.json({
    deleted: items.deletedCount
  })
}
