const Mongoose = require("mongoose");
const { Schema } = Mongoose; 

const NotesSchema = new Schema ({
    User: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    Title: String,
    Description: String,
    Tag: String
});

module.exports = Mongoose.model("note", NotesSchema);