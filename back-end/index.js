const express = require("express");
const connectToDB = require("./database.js")
const app = express();
const NotesRouter = require("./routers/notesRouter")
const AuthRouter = require("./routers/authRouter")

app.use("/notes", NotesRouter);
app.use("/auth", AuthRouter);

connectToDB();

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})

