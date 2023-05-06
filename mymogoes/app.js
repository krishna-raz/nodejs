const mogoees = require("mongoose");
const validator = require('validator');
mogoees.connect("mongodb+srv://krishna:admin@cluster0.5exf1tj.mongodb.net/rkrishna").then(() => console.log('Connected!'));


const studentSchema= new mogoees.Schema({
    name:{
        type: String,
        required: true
               
    },
    email:{
        type: String,
        validata(value){
            if(!validator.isEmail(value)){
                throw console.error("this is a not valid Email");
            }
        }
    },
    pass:{
        type: String,
        required: true
    }
})


const Student =new mogoees.model("student",studentSchema);

const createstudent=async()=>{
    try{
        const student1= new Student({
            name :"krishna Raj",
            email: "krishnadbg001@gmail.com",
            pass: "krishna123@"
        })

        const result = await Student.insertMany([student1]);
        console.log(result);

    }
    catch(err){
        console.log(err
            );
    }
}

createstudent();