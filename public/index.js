// @ts-nocheck
import { todo } from "./rest.js"
import { List, TodoForm } from './components.js'

const app = document.getElementById('app')
app.className = 'px-2'


renderItems()
async function renderItems() {
  const title = document.createElement('h1')
  title.className = 'text-xl'
  title.textContent = 'My TodoList'

  const items = await todo.getItems()
  const list = await List({ items: items })
    
  const form = await TodoForm()

  app.append(
    title,
    list,
    form,
  )
}