import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {

    const host = "http://localhost:5000/notes"

    const [Note, setNote] = useState([])

    const getAll = async () => {
        const response = await fetch(`${host}/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("authtoken")
            },
        });

        const json = await response.json()
        console.log(json.Notes);
        setNote(json.Notes)
    }

    const addNote = async(Title, Description, Tag) => {

        const response = await fetch(`${host}/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("authtoken")
            },
            body: JSON.stringify({Title, Description, Tag})
        }
        );
        let noteObject = {
            "Title": Title,
            "Description": Description,
            "Tag": Tag
        }

        setNote(Note.concat(noteObject))

        // console.log("Adding note");
    }

    const deleteNoteOne = async(id) => {
        const response = await fetch(`${host}/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("authtoken")
            },
        });
        const newNotes = Note.filter((note)=> {return note._id !== id})
        setNote(newNotes);
    }

    const updateOne = async(id, Title, Description, Tag)=> {
        const response = await fetch(`${host}/update/${id}`, {
            method: 'PUT',  
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem("authtoken")
            },
            body: JSON.stringify({Title, Description, Tag})
        });

        let newNote = JSON.parse(JSON.stringify(Note))

        for(let i=0; i< newNote.length ; i++) {
            const element = newNote[i];
            if (element._id === id) {
                newNote[i].Title = Title
                newNote[i].Description = Description
                newNote[i].Tag = Tag
            }
            break;
            
        }
        setNote(newNote)
    }



    return (
        <NoteContext.Provider value={{ Note, setNote, addNote, deleteNoteOne, getAll, updateOne}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

