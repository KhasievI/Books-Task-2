const mongoose = require("mongoose");
const express = require("express");

const app = express();
port = 3035;
app.use(express.json());

app.use(require('./routes/book.route'));
app.use(require('./routes/genre.route'));
app.use(require('./routes/author.route'))
app.use(require('./routes/review.route'))

mongoose
  .connect("mongodb+srv://khasiev:malsy1999@cluster0.yzc6knt.mongodb.net/books")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("conected");
});
