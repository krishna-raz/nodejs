const express = require('express');

 require("./db/conf");
 const student=require("./model/studentdb");

const app = express();


app.use(express.json()); 
app.get('/', (req, res) => {
    res.send("Hello i am this side ");
});
 
app.post ('/student',(req,res)=>{
    const user=student(req.body)
    user.save();
    res.send(user); 
    console.log(user);    
});
app.listen(5000);