import List from '../../src/models/listModel.js'
import { parseObjectId } from '../utils.js'

export async function getLists(req, res) {
  const lists = await List.find()
  res.json(lists) 
}

export async function createList(req, res) {
  const list = await List.create({
    title: req.body.title,
  })
  res.json(list)
}

export async function updateList(req, res) {
  const id = parseObjectId(req.params.id)
  const list = await List.findByIdAndUpdate(
    id, req.body, { new: true }
  )
  res.json(list)
}

export async function deleteList(req, res) {
  const id = parseObjectId(req.params.id)
  const list = await List.findOneAndDelete(id)
  res.json(list)
}
