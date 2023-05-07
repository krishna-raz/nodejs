const express = require('express');

require("./db/conf");
const student = require("./model/studentdb");

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello i am this side ");
});
//add the user 
app.post('/student', async (req, res) => {
    const user = student(req.body)
    user.save();
    res.send(user);
    console.log(user);
});

//show all user data find 
app.get("/student", async (req, res) => {
    try {
        const studentuser = await student.find();
        res.send(studentuser);
    }
    catch (e) {
        res.send(e);
    }
});
// show a user by phone number
app.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentid = await student.find({ _id });
        res.send(studentid);

    }

    catch (e) {

        res.status(500).send("error");
    }
});

//update a user by using id
app.patch("/student/:id", async (req, res) => {
    try {const _id = req.params.id;
        const user= req.body
        const studentupdate = await student.findByIdAndUpdate(_id,user ,{new :true});
        res.status(200).send(studentupdate);
    } catch (e) {
        res.status(400).send("errer");
        console.log("errer3")
    }
});


//delte the student by uising id
app.delete("/student/:id",async(req, res)=>{
try{
    const _id = req.params.id;
const studentdelete=await student.findByIdAndDelete(_id);
res.status(200).send(studentdelete)

}catch(e){
    res.status(500).send(e);
}
});




app.listen(5000);