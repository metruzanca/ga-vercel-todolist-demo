import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import List from './models/listModel.js'
import Todo from './models/todoModel.js'
import User from './models/userModel.js'
import { DATABASE_URL, SALT_ROUNDS } from './constants.js'

mongoose.connect(DATABASE_URL)
mongoose.set('strictQuery', false)
await seed()
await mongoose.disconnect()

async function seed() {
  await Todo.deleteMany()
  const shoppingListItems = await Todo.insertMany([
    { text: 'Milk' },
    { text: 'Bread' },
    { text: 'Eggs' },
    { text: 'Butter' },
    { text: 'Bacon' },
  ])
  
  await List.deleteMany()
  await List.create({
    title: 'Shopping List',
    items: shoppingListItems.map(({ _id }) => _id ),
  })

  const salt = bcrypt.genSaltSync(SALT_ROUNDS)
  const password = bcrypt.hashSync('password123', salt)

  await User.deleteMany()
  await User.create({
    username: 'admin',
    password,
  })
}
