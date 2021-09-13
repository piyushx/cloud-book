const express = require("express")
const router = express.Router();
const NotesModel = require("../models/NotesMongoModel")
const getUser = require("../middleware/getUserDetails")

router.get("/all", getUser,  async(req,res)=> {
    const Notes = await NotesModel.find({User: req.User.id})
    res.json({Notes})
})

router.post("/new", getUser, async(req,res)=> {
    const {Title, Description, Tag} = req.body;
    const newNote = new NotesModel({
        Title,
        Description,
        Tag,
        User: req.User.id
    })
    const saveNote = await newNote.save()
    res.json(saveNote)
})

router.put("/update/:id", getUser, async(req,res)=> {
    const {Title, Description, Tag} = req.body ;

    const saveUpdatedeNote = {};
    if(Title) { saveUpdatedeNote.Title = Title };
    if(Description) { saveUpdatedeNote.Description = Description };
    if(Tag) { saveUpdatedeNote.Tag = Tag };

    console.log("done till saveupdated");

    let updateNote = await NotesModel.findById(req.params.id)
    if(!updateNote) {
        res.json({error: "Not found!"})
        console.log("not found");
    }

    if(updateNote.User.toString() !== req.User.id) {
       return res.status(401).send("You are not allowed to perform the action")
       console.log(unauthoried);
    }

    updateNote = await NotesModel.findByIdAndUpdate(req.params.id, {$set: saveUpdatedeNote}, {new:true})
    console.log("nothing");
    res.json({updateNote})
})



module.exports = router