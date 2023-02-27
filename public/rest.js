const BASE_URL = '/api'

export async function getItems() {
  const data = await fetch(`${BASE_URL}/todo`)
  const todos = await data.json()
  return todos
}
