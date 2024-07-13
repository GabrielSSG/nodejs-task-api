import http from "node:http";
import { routes } from "./routes.js";
import { getQueryParams } from "./utils/get-query-params.js";
import { json } from "./middleware/json.js";

const findRoute = (method, url) => {
  return routes.find(
    (route) => route.method === method && route.path.test(url)
  );
};

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  const route = findRoute(method, url);

  if (!route) {
    return response.writeHead(404).end();
  }

  const routeParams = request.url.match(route.path);
  const { query, ...params } = routeParams.groups;

  request.params = params;
  request.query = query ? getQueryParams(query) : {};

  return route.handler(request, response);
});

server.listen(3333, () => {
  console.log("Server is running!");
});
