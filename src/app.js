const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  //   const searchParams = new URLSearchParams(window.location.search);
  //   console.log(searchParams);
  const nameParam = url.searchParams.get("hello");
  const userf = url.searchParams.get("users");
  //   console.log(userf);
  //   if (req.url === "/users") {
  //     res.status = 200;
  //     res.statusMessage = "OK";
  //     res.header = "Content-Type: application/json";
  //     res.write(getUsers());
  //     res.end();
  //     return;
  //   }
  if (url.searchParams.has("users")) {
    res.status = 200;
    res.statusMessage = "OK";
    res.header = "Content-Type: application/json";
    res.write(getUsers());
    res.end();
    return;
  }
  if (url.searchParams.get("hello")) {
    res.status = 200;
    res.statusMessage = "OK";
    res.header = "Content-Type: text/plain";
    res.write(`Hello, ${nameParam}.`);
    res.end();
    return;
  }
  res.status = 200;
  res.statusMessage = "OK";
  res.header = "Content-Type: text/plain";
  res.write("Hello, World!");
  res.end();
});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
