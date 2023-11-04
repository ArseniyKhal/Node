const { request, response } = require("express");
const User = require("../models/user");

// Получим всех пользователей из БД
const getUsers = (request, response) => {};

// Получим пользователя по ID
const getUser = (request, response) => {
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id}`);
};

// Создаем пользователя
const createUser = (request, response) => {
  const data = request.body;
  console.log(data);
  User.create(data)
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

// Обновляем пользователя
const updateUser = (request, response) => {};

// Удаляем пользователя
const deleteUser = (request, response) => {};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
