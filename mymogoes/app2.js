const mogoees = require("mongoose");
const validator = require('validator');
mogoees.connect("mongodb+srv://krishna:admin@cluster0.5exf1tj.mongodb.net/rkrishna").then(() => console.log('Connected!'));

//schema
const playlistSchema = new mogoees.Schema({
    name: {
        type: String,
        require: true
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
    age: Number,
    class: Number,
    classteacher: String,


})

//colation create
const Playlist = new mogoees.model("classdata", playlistSchema);





const savemydta = async () => {

    try {
        //create the data
        const mydata2 = new Playlist({
            name: "sohan",
            email:"djks@h.com",
            age: 18,
            class: 6,
            classteacher: "krishnakk",

        })
        
        const result = await Playlist.insertMany([mydata2]);
        console.log(result);

    }
    catch (err) {
        console.log("error found!",err);

    }



}


savemydta();

const showdata = async () => {
    const result = await Playlist.find({ age: 13 }).select({ name: 1 });

    console.log(result);

}
// showdata();


//this is a update the data

const updateDocument = async (id) => {
    try {
        const result = await Playlist.updateOne({_id:id }, {
            $set: { age: 30 }

        });
        console.log(result);
    }
    catch (err) {
        console.log("error found", err);

    }

}


// updateDocument("6454dccd8037d36a0ce3e23f");

const deleteDocment=async(_id)=>{
    try{
        const result= await Playlist.deleteOne({_id});
        console.log(result);

    }
    catch(err){
        console.log(err);
    }
}

// deleteDocment("6454dccd8037d36a0ce3e23f")