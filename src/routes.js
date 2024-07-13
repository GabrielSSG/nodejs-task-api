import { buildRoutePath } from "./utils/build-route-path.js";
import { service } from "./service.js";

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: async (request, response) => {
      const { title, description } = request.body;

      try {
        await service.createTask(title, description);
        return response.writeHead(201).end();
      } catch (err) {
        return response
          .writeHead(err.statusCode)
          .end(JSON.stringify(err.message));
      }
    },
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: async (request, response) => {
      const { search } = request.query;

      try {
        const tasks = await service.listTasks(search);
        return response.end(JSON.stringify(tasks));
      } catch (err) {
        return response.writeHead(400).end(JSON.stringify(err.message));
      }
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: async (request, response) => {
      const { id } = request.params;
      const { title, description } = request.body;

      try {
        service.updateTask(id, title, description);
        return response.writeHead(204).end();
      } catch (err) {
        return response
          .writeHead(err.statusCode)
          .end(JSON.stringify(err.message));
      }
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: async (request, response) => {
      const { id } = request.params;

      try {
        service.deleteTask(id);
        return response.writeHead(204).end();
      } catch (err) {
        return response
          .writeHead(err.statusCode)
          .end(JSON.stringify(err.message));
      }
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id"),
    handler: async (request, response) => {
      const { id } = request.params;

      try {
        service.toggleCompletedTask(id);
        return response.writeHead(204).end();
      } catch (err) {
        return response
          .writeHead(err.statusCode)
          .end(JSON.stringify(err.message));
      }
    },
  },
];
