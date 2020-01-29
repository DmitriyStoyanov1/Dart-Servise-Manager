// импортирует модуль под названием 'express'
var express = require('express');
var fs = require('fs');

// создаем сервер
var app = express(); // огромный {} объект с методами и свойствами

app.use(express.static('public'));
app.use(express.json());

// get => слушает GET запросы по адресу '/'
// HTTP запросы бывают GET, POST, DELETE, PUT, PATCH
app.post('/form', function (request, response) {
  const dataFromClient = request.body;

  // записываем данные сюда в файлик
  fs.writeFileSync(`./applications/${Math.random()}.json`, JSON.stringify(dataFromClient));

  response.send({ response: 'Данные получены, спасибо!' });
});

// инициализация сервера
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});