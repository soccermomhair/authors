const Author = require('../models/author.model')

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                console.log(newAuthor);
                res.json(newAuthor)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getAll: (req, res) => {
        // Product is from model file
        // find is a mongoose command
        Author.find()
            .then(allauthors => {
                console.log(allauthors);
                res.json(allauthors);
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ msg: "Something went wrong", error: err })
            })
    },
    getOne: (req, res) => {
        // the param specified in req.params just has to match the one specified in its corresponding route, we name it however we want otherwise
        Author.findById(req.params.id)
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json({ msg: "Something went wrong", error: err })
            })
    },
    updateOne: (req, res) => {
        Author.findByIdAndUpdate((req.params.id), req.body, { new: true, runValidators: true })

            .then((updatedAuthor) => {
                console.log(updatedAuthor)
                res.json({ updatedAuthor })
            })

            .catch((err) => {
                res.status(400).json({ msg: "Something went wrong", error: err })
            })
    },
    destroy: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then((struckId) => {
                console.log(struckId);
                res.json(struckId);
            })

            .catch((err) => {
                console.log(err);
                res.status(400).json({ msg: "Something went wrong", error: err })
            })
    },

}