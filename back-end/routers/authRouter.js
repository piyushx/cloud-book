const express = require("express")
const router = express.Router();
const NotesModel = require("../models/NotesMongoModel")

router.get("/", (req,res)=> {
    res.send("Login page")
})

router.get("/signup", (req,res)=> {
    res.send("Signup required")
})

router.get("/login", (req,res)=> {
    res.send("Login page")
})


module.exports = router