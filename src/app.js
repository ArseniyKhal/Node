const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bodyParser = require("body-parser");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();
app.use(userRouter);

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/mydb",
} = process.env;

mongoose.connect(MONGO_URL);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Connected to MongoDB");
});

const helloWorld = (request, response) => {
  response.status(200);
  response.send("hello, World!");
};

app.get("/", helloWorld);

app.use(cors());
app.use(bodyParser.json());
app.use(loggerOne);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
