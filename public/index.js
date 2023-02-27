// @ts-nocheck
import * as Todo from "./rest.js"
// import Auth from "./auth.js"

const BUTTON = {
  edit: '✏️',
  save: '💾',
}

const items = document.querySelector('#items')

async function renderItems() {
  const todos = await Todo.getItems()
  if (items) {
    items.innerHTML = ''
    for (const item of todos) {
      const itemEl = await todoItem(item)
      items.append(itemEl)
    }
  }
}

async function todoItem(item) {
  let isEditing = false
  const div = document.createElement('div')
  const p = document.createElement('p')
  p.append(item.text)

  const button = document.createElement('button')
  button.textContent = BUTTON.edit
  button.addEventListener('click', async () => {
    if (!isEditing) {
      // If not editor, make the text editable and change this button to be 'Save'
      isEditing = true
      p.contentEditable = true
      button.textContent = BUTTON.save
    } else {
      // If Save is clicked, reset button state to default.
      // Next check if we've got changes, if we do, update the TODO on server
      isEditing = false
      p.contentEditable = false
      button.textContent = BUTTON.edit
      if (p.textContent !== item.text) {
        const response = await Todo.update()
        // TODO if error, handle that and revert to previous version
        // TODO if ok, mutate the item object to have new value.
        // TODO rerender list
      }
    }
  })
  div.className = 'flex justify-between'
  button.className = "px-1 bg-slate-300"
  p.className = 'w-full'

  div.append(p, button)
  return div
}

async function createTodo() {

}

async function checkTodo() {

}

async function deleteCompleted() {

}

renderItems()
