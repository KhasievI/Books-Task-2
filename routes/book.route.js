const { Router } = require('express')
const { bookController } = require('../controllers/book.controller')

const router = Router()

router.post('/books', bookController.addBook)
router.delete('/books', bookController.deleteBook)
router.patch('/books', bookController.editBook)
router.get('/books/:id', bookController.getBookByID)
router.get('/books', bookController.getBooks)
router.get('/books', bookController.getBooksByGenre)




module.exports = router;