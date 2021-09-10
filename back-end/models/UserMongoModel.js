const Mongoose = require("mongoose");
const { Schema } = Mongoose; 

const AuthSchema = new Schema ({
    Name: String,
    Email: {
        type: String,
        unique: true
    },
    Password: String
});

module.exports = Mongoose.model("user", AuthSchema);