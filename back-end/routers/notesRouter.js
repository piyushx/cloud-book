const express = require("express")
const router = express.Router();
const NotesModel = require("../models/NotesMongoModel")

router.get("/", (req,res)=> {
    res.send("Hey man")
})

router.get("/notes", (req,res)=> {

    var title = "Hey this  dd  ddn is ff fjfm the t dj rgi ddmi"
    var desc = "This is the descriptio ffnf fmmd  11n"

    NotesModel.findOne({Title: title}, (err, item)=> {

        if(!item) {
            const newNote = new NotesModel({
            Title: title,
            Description: desc
    })
            newNote.save();
            res.send("New note created")
           
        } else {
            if (title === item.Title) {
                 res.send("iiitem already exists")
            }
        }

            
    })

})

module.exports = router