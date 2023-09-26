const mongoose = require("mongoose");

//Create schema

let studentSchema = new mongoose.Schema({
    name : String,
    grid : Number,
    course: String,
    email:String
})

//Now Create model from schema

let student = mongoose.model("Student", studentSchema);

module.exports = student;