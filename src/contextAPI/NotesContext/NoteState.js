import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {


    const [Note, setNote] = useState([{
        "Title" : "My first Note",
        "Description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima culpa necessitatibus et, molestias quis voluptates, temporibus non qui natus, dolores ad odit officia illum optio id excepturi sit libero.",
        "Tag": "Personal"
    },
    {
        "Title" : "My first Note",
        "Description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima culpa necessitatibus et, molestias quis voluptates, temporibus non qui natus, dolores ad odit officia illum optio id excepturi sit libero.",
        "Tag": "business"
    },
    {
        "Title" : "My first Note",
        "Description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima culpa necessitatibus et, molestias quis voluptates, temporibus non qui natus, dolores ad odit officia illum optio id excepturi sit libero.",
        "Tag": "motivation"
    },
    {
        "Title" : "My first Note",
        "Description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima culpa necessitatibus et, molestias quis voluptates, temporibus non qui natus, dolores ad odit officia illum optio id excepturi sit libero.",
        "Tag": "goals"
    },
    {
        "Title" : "My first Note",
        "Description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima culpa necessitatibus et, molestias quis voluptates, temporibus non qui natus, dolores ad odit officia illum optio id excepturi sit libero.",
        "Tag": "goalie"
    }
    
])

const addNote = (Title, Description, Tag)=> {

    let noteObject = {
        "Title" : Title,
        "Description" : Description,
        "Tag": Tag
    }

    setNote(Note.concat(noteObject))
    
    console.log("Adding note");
}

const deleteNoteOne = (Tag) => {
    const updatedNotes = Note.filter((note)=>{return note.Tag !== Tag })
    setNote(updatedNotes)
}

return(
    <NoteContext.Provider value={{Note, setNote, addNote, deleteNoteOne}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState ;