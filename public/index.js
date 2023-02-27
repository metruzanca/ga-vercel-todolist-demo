import { getItems } from "./rest.js"

const items = document.querySelector('#items')

async function renderItems() {
  const todos = await getItems()
  if (items) {
    items.innerHTML = ''
    for (const item of todos) {
      const div = document.createElement('div')
      div.append(item.text)
      items.append(div)
    }
  }
}

renderItems()
