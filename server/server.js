const express = require("express");
const app = express(); //the express method allows us to creat an express application
const cors = require('cors');

app.use(express.json()); //middleware that allows us to read json objects sent to the client's request
app.use(express.urlencoded({ extended: true })); //middleware that allows us to read json objects with strings and arrays in the client's request
app.use(cors(
    // cors is going to allow different ports to send requests to our API
    { origin: "http://127.0.0.1:5173" }
));

require('./config/mongoose.config');
require('./routes/author.routes')(app);

app.listen(8000, () => {
    console.log("Listening at port 8000")
})