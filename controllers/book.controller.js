const Book = require("../models/Book.model");

module.exports.bookController = {
  addBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }).then((data) => {
        res.json(data)
    });
  },
  deleteBook: (req, res) => {
    Book.findByIdAndDelete(req.params.id).then((data) => {
      res.json(data);
    });
  },
  editBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
    }).then((data) => {
      res.json(data);
    });
  },
  getBookByID: (req, res) => {
    Book.findById(req.params.id).populate('author genre').then((data) => {
      res.json(data);
    });
  },
  getBooks: (req, res) => {
    Book.find().populate('author genre').then((data) => {
      res.json(data);
    });
  },
  getBooksByGenre: (req, res) => {
    Book.find({ genre: req.params.genre }).populate('author genre').then((data) => {
      res.json(data);
    });
  },
};
