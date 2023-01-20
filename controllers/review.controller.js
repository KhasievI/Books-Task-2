const { populate } = require('../models/Review.model')
const Review = require('../models/Review.model')

module.exports.reviewController = {
    addReview: (req, res) => {
        Review.create({
            text: req.body.text,
            name: req.body.name,
            book: req.body.book,
        })
    },
    deleteReview: (req, res) => {
        Review.findByIdAndDelete(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getReviewByID: (req, res) => {
        Review.find({book: req.params.id}).populate('book').then((data) => {
            res.json(data)
        })
    }
}