import React, {useContext, useEffect} from 'react'
import NewNoteForm from './NewNoteForm'
import NoteItem from './NoteItem'
import NoteContext from '../contextAPI/NotesContext/NoteContext'

function Notes() {

    const fetchNote = useContext(NoteContext);
    const {Note, getAll} = fetchNote

    useEffect(() => {
        getAll()
    }, [])

    return (
        <div className = "container my-3">
            <NewNoteForm/>
            <h3 className="my-4">Your recent notes: </h3>
            <div className="row">
            {Note.map((eachNote)=> 
                <div className = "col-md-4"><NoteItem Title = {eachNote.Title} Description = {eachNote.Description} Tag = {eachNote.Tag} Key = {eachNote._id} /></div>
            )}
            </div>
        </div>
    )
}

export default Notes
