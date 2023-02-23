# Vercel Express MongoDB - Todolist example

Todolist API allows managing a list of todos. Once checked off, its possible to delete all completed todos.

When a frontend is implemented, it will be served on `/`, meanwhile all API routes are on the BASE_URL of `/api/`.

Heres all the supported API routes.

| Method   | URL               | Path   | Description                     |
| -------- | ----------------- | ------ | ------------------------------- |
| `GET`    | `/todo/`          | `/`    | List all todo items             |
| `POST`   | `/todo/`          | `/`    | Create new todo item            |
| `PATCH`  | `/todo/1`         | `/:id` | Update todo item                |
| `DELETE` | `/todo/completed` | `/`    | Deletes all completed todo item |

<!-- | `GET`    | `/todo/1`         | `/:id` | Show single todo item           | -->
<!--     | `DELETE`          | `/todo/1` | `/:id`                          | Delete todo item | --> 


---

[Template Documentation](https://github.com/metruzanca/ga-vercel-demo)
