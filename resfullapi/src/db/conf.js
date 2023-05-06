const mogoees = require("mongoose");

mogoees.connect("mongodb+srv://krishna:admin@cluster0.5exf1tj.mongodb.net/student").then(() => console.log('Connected!'));
