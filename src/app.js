const http = require("http");
const getUsers = require("./modules/users");
const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const nameParam = url.searchParams.get("hello");
  if (url.searchParams.has("users")) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(getUsers());
    return;
  } else if (url.searchParams.has("hello")) {
    if (url.searchParams.get("hello")) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Hello, ${nameParam}.`);
      return;
    }
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Enter a name");
    return;
  } else if (url.searchParams.toString()) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("");
    return;
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!");
  }
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
