const BASE_URL = '/api'

async function getItems() {
  const data = await fetch(`${BASE_URL}/todo`)
  const todos = await data.json()
  return todos
}

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