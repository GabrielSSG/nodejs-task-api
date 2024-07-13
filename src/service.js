import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { HttpError } from "./utils/http-error.js";

const database = new Database();

export const service = {
  createTask: async (title, description) => {
    if (!title) {
      throw new HttpError(400, "title is required");
    }

    if (!description) {
      throw new HttpError(400, "description is required");
    }

    return await database.insert("tasks", {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    });
  },

  listTasks: async (queryString) => {
    return await database.select("tasks", {
      title: queryString,
      description: queryString,
    });
  },

  updateTask: async (id, title, description) => {
    const [task] = database.select("tasks", { id });

    if (!task) {
      throw new HttpError(404, "Task not found");
    }

    if (!title && !description) {
      throw new HttpError(400, "title or description are required");
    }

    return await database.update("tasks", id, {
      title: title ?? task.title,
      description: description ?? task.description,
      updated_at: new Date(),
    });
  },

  deleteTask: async (id) => {
    const [task] = database.select("tasks", { id });

    if (!task) {
      throw new HttpError(404, "Task not found");
    }

    return await database.delete("tasks", id);
  },

  toggleCompletedTask: async (id) => {
    const [task] = database.select("tasks", { id });

    if (!task) {
      throw new HttpError(404, "Task not found");
    }

    return await database.update("tasks", id, {
      completed_at: task.completed_at ? null : new Date(),
      updated_at: new Date(),
    });
  },
};
