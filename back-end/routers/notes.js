const express = require("express")
const router = express.Router();
const User = require("../models/Notes")

router.get("/", (req,res)=> {
    res.send("Hey man")
})

router.get("/note", (req,res)=> {

    var title = "Hey this  dd  ddn is the t dj rgi ddmi"
    var desc = "This is the descriptio ffnf fmmd  11n"

    User.findOne({Title: title}, (err, item)=> {

        if(!item) {
            const newNote = new User({
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