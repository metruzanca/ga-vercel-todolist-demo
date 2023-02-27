import mongoose from 'mongoose'
// import { todoSchema } from './todo'

export const listSchema = new mongoose.Schema({
  title: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
})

export default mongoose.model('List', listSchema)
