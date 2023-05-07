const express = require('express');
require("./db/conf");

const studentRouter = require("./routers/student");

const app = express();
const routers = new express.Router();

app.use(express.json());
app.use(studentRouter);

app.get('/', (req, res) => {
    res.send("Hello i am this side ");
});



app.listen(5000);