# Vercel Express MongoDB - Todolist example

This API allows the creation of Users, each with their own todolist. Each user then has full CRUD on their tasks.

The frontend is served on `/`, meanwhile the API is on `/api/`.


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
