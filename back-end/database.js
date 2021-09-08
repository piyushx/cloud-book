const Mongoose = require("mongoose")

 const ConnectDB =async()=> {
    Mongoose.connect("mongodb://localhost:27017/cloudBookDB", {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
        console.log("DB connected successfully");
    })
}

module.exports = ConnectDB;

