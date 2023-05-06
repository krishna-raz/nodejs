const validator = require('validator');
const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{
        type: String,
        minlength:3,
        required: true,
    },
    email: {
        type :String,
        require :true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("invalid Email");
            }
        }

    },
    
    phone: {
        type : Number,
        required :true,
        minlength:9,

        
        validata(value){
            if(!validator.isMobilePhone(value)){
                throw new Error("this phone number is not Valid");
            }
        }
    },
    address: {
        type : String ,
    }
})


const Student = new mongoose.model("studentdb",studentSchema);

module.exports=Student; 
