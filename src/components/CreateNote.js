import React, {useContext} from 'react'
import NewNoteForm from './NewNoteForm'
import NoteItem from './NoteItem'
import NoteContext from '../contextAPI/NotesContext/NoteContext'

function Notes() {

    const fetchNote = useContext(NoteContext);


    return (
        <div className = "container my-3">
            <NewNoteForm/>
            <h3 className="my-4">Your recent notes: </h3>
            <div className="row">
            {fetchNote.Note.map((eachNote)=> 
                <div className = "col-md-4"><NoteItem Title = {eachNote.Title} Description = {eachNote.Description} Tag = {eachNote.Tag} Key = {eachNote.Tag} /></div>
            )}
            </div>
        </div>
    )
}

export default Notes
