# Node.js Fundamentals Challenge

This repository contains the solution for the first challenge of the Node.js track in the Ignite course by Rocketseat. In this challenge, a CRUD API for managing tasks was developed Additionally, it is possible to import a file containing tasks to be persisted in a simulated database.

## Features

- Create a new task
- List all tasks
- Update an existing task
- Delete a task
- Mark a task as complete
- Import tasks from a CSV file

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository

```bash
  git clone https://github.com/GabrielSSG/nodejs-task-api.git
```

2. Install dependencies:

```bash
   cd nodejs-task-api
  npm install
```

### Running the Application

To start the development server:

```bash
  npm run dev
```

No you can make resquets to `http://localhost:3333` to see the api in action.

### Usage

- Create a new task

```sh
  POST /tasks
```

Request Body:

```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

- List all tasks

```sh
  GET /tasks
```

- Update an existing task

```sh
  PUT /tasks/:id
```

Request Body:

```json
{
  "title": "Updated Title",
  "description": "Updated Description"
}
```

- Delete a task

```sh
  DELETE /tasks/:id
```

- Mark a task as complete

```sh
  PATCH /tasks/:id/complete
```

## Contributing

Feel free to fork this repository, submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

Made with 💜 by Rocketseat.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/gb1994/).
