import List from '../../src/models/listModel.js'
import Todo from '../../src/models/todoModel.js'
import { parseObjectId, toBool } from '../utils.js'

export async function getTodos(req, res) {
  const items = await Todo.find()
  res.json(items)
}

async function addToList(item, listId) {
  const id = parseObjectId(listId)
  await List.findByIdAndUpdate(id, {
    $push: { items: item._id }
  })
}

export async function createTodo(req, res) {
  const { text, done, listId } = req.body
  const item = await Todo.create({
    text,
    done,
  })
  if (listId) await addToList(item, listId)
  res.json(item)
}

export async function updateTodoById(req, res) {
  const id = parseObjectId(req.params.id)
  const { text, listId } = req.body
  // Mongoose doesn't auto convert to bool, we need to do it manually
  const done = toBool(req.query.done)
  const item = await Todo.findByIdAndUpdate(
    id, { text, done }, { new: true }
  )
  if (listId) await addToList(item, listId)
  res.json(item)
}

export async function deleteCompleted(req, res) {
  const items = await Todo.deleteMany({ done: true })
  res.json({
    deleted: items.deletedCount
  })
}
