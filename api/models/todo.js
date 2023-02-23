import mongoose from 'mongoose'

export const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  }
})

export default mongoose.model('Todo', todoSchema)
