import 'dotenv/config'
import mongoose from 'mongoose'
// import List from './models/list.js'
import Todo from './models/todoModel.js'

// Leave these 4 lines
//@ts-ignore
mongoose.connect(process.env.DATABASE_URL)
await seed()
await mongoose.disconnect()

async function seed() {
  await Todo.deleteMany()
  await Todo.insertMany([
    { text: 'Milk' },
    { text: 'Bread' },
    { text: 'Eggs' },
    { text: 'Butter' },
    { text: 'Bacon' },
  ])

  // This bit ↓ is for more features

  // await List.create({
  //   title: 'Shopping List',
  //   items: shoppingListItems.map(({ _id }) => _id ),
  // })
}
