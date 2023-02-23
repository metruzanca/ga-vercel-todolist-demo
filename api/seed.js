import 'dotenv/config'
import mongoose from 'mongoose'
import List from './models/listModel.js'
import Todo from './models/todoModel.js'

console.log(process.env.DATABASE_URL)

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
mongoose.set('strictQuery', true)
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
}
