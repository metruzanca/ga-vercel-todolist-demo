//@ts-nocheck
import clsx from 'https://cdn.skypack.dev/clsx'

const BUTTON = {
  edit: '✏️',
  save: '💾',
}

export async function TodoItem({
  item, idx,
}) {
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
      div.classList.add('bg-sky-100')
      button.textContent = BUTTON.save
    } else {
      // If Save is clicked, reset button state to default.
      // Next check if we've got changes, if we do, update the TODO on server
      isEditing = false
      p.contentEditable = false
      div.classList.remove('bg-sky-100')
      button.textContent = BUTTON.edit
      if (p.textContent !== item.text) {
        const response = await Todo.update()
        // TODO if error, handle that and revert to previous version
        // TODO if ok, mutate the item object to have new value.
        // TODO rerender list
      }
    }
  })
  div.className = clsx(
    'flex',
    'justify-between',
    idx % 2 === 0 && 'odd',
    'px-1',
  )
  p.className = 'w-full'

  div.append(p, button)
  return div
}

export async function List({ items }) {
  const container = document.createElement('div')
  container.innerHTML = ''
  for (let idx = 0; idx < items.length; idx++) {
    const item = items[idx];
    const itemEl = await TodoItem({ item, idx })
    container.append(itemEl)
  }
  return container
}

export async function TodoForm() {
  const form = document.createElement('form')
  form.className = 'flex justify-center mt-2'

  const input = document.createElement('input')
  input.className = 'bg-sky-100 rounded-tl rounded-bl'

  const button = document.createElement('button')
  button.textContent = 'Add'
  button.className = 'rounded-tr rounded-br px-1 bg-sky-200'

  form.append(input, button)
  return form
}
