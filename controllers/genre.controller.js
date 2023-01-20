const Genre = require('../models/Genre.model')

module.exports.genreController = {
    addGenre: (req, res) => {
        Genre.create({
            name: req.body.name,
            description: req.body.description,
        }).then((data) => {
            res.json(data)
        })
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndDelete(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getGenre:  (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
    },
}