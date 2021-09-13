const express = require("express");
const connectToDB = require("./database.js")
const app = express();
const NotesRouter = require("./routers/notesRouter")
const AuthRouter = require("./routers/authRouter")

app.use(express.json())

app.use("/notes", NotesRouter);
app.use("/auth", AuthRouter);


connectToDB();

app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})