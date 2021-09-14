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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzZjg0YmY1MjU3YjBiYjEzYjI3ZmNjIn0sImlhdCI6MTYzMTU1MjczNH0.UzwxyclkoZQunExaAbfYvMNlc_azadH7dKsZ7WPZzbE"
            },
        });

        const json = await response.json()
        console.log(json.Notes);
        setNote(json.Notes)
    }

    

    const addNote = (Title, Description, Tag) => {

        let noteObject = {
            "Title": Title,
            "Description": Description,
            "Tag": Tag
        }

        setNote(Note.concat(noteObject))

        console.log("Adding note");
    }

    const deleteNoteOne = (Key) => {
        const updatedNotes = Note.filter((note) => { return note._id !== Key })
        setNote(updatedNotes)
    }

    return (
        <NoteContext.Provider value={{ Note, setNote, addNote, deleteNoteOne, getAll}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

