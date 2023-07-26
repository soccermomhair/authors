const AuthorController = require('../controllers/author.controller')

const routes = (app) => {
    // app.get('/api', (req, res) => {
    //     res.json({ msg: "hello world" })
    // })
    //create
    app.post('/api/authors', AuthorController.createAuthor);
    //read
    app.get("/api/authors", AuthorController.getAll);
    app.get('/api/authors/:id', AuthorController.getOne);
    ///delete
    app.delete("/api/authors/:id", AuthorController.destroy);
    //update
    app.put("/api/authors/:id", AuthorController.updateOne);
}

module.exports = routes