const express = require("express");
const connectToDB = require("./database.js")
const app = express();
const router = require("./routers/notes")

app.use("/send", router)

connectToDB();

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})

