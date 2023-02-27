const BASE_URL = '/api'

export const todo = {
  async getItems() {
    const data = await fetch(`${BASE_URL}/todo`)
    return data.json()
  },
  async createTodo() {},
  async updateTodo() {},
  async deleteCompleted() {},
};

export const auth = {
  async login() {},
  async register() {},
  async changePassword() {},
}
