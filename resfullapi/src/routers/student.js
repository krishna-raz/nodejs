const express=require("express");
const router=new express.Router();

const student = require("../model/studentdb");

//add the user 
router.post('/student', async (req, res) => {
    const user = student(req.body)
    user.save();
    res.send(user);
    console.log(user);
});

//show all user data find 
router.get("/student", async (req, res) => {
    try {
        const studentuser = await student.find();
        res.send(studentuser);
    }
    catch (e) {
        res.send(e);
    }
});
// show a user by phone number
router.get("/student/:id", async (req, res) => {
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
router.patch("/student/:id", async (req, res) => {
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
router.delete("/student/:id",async(req, res)=>{
try{
    const _id = req.params.id;
const studentdelete=await student.findByIdAndDelete(_id);
res.status(200).send(studentdelete)

}catch(e){
    res.status(500).send(e);
}
});


 
module.exports=router;