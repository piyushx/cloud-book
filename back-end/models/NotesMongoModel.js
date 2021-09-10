const Mongoose = require("mongoose");
const { Schema } = Mongoose; 

const NotesSchema = new Schema ({
    Title: String,
    Description: String,
    Tag: String
});

module.exports = Mongoose.model("note", NotesSchema);