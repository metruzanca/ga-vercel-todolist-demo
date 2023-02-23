# Vercel Express MongoDB - Todolist example

Todolist API allows managing a list of todos. Once checked off, its possible to delete all completed todos.

When a frontend is implemented, it will be served on `/`, meanwhile all API routes are on the BASE_URL of `/api/`.

Heres all the supported API routes.

| Method   | URL               | Path   | Description                                                    |
| -------- | ----------------- | ------ | -------------------------------------------------------------- |
| `GET`    | `/todo/`          | `/`    | List all todo items                                            |
| `POST`   | `/todo/`          | `/`    | Create new todo item, optionally specify listId to be added to |
| `PATCH`  | `/todo/1`         | `/:id` | Update todo item                                               |
| `DELETE` | `/todo/completed` | `/`    | Deletes all completed todo item                                |


| Method   | URL               | Path   | Description                |
| -------- | ----------------- | ------ | -------------------------- |
| `GET`    | `/list/`          | `/`    | List all lists             |
| `POST`   | `/list/`          | `/`    | Create new list item       |
| `PATCH`  | `/list/1`         | `/:id` | Update list name           |
| `DELETE` | `/list/completed` | `/`    | Deletes list but not items |


---

[Template Documentation](https://github.com/metruzanca/ga-vercel-demo)
