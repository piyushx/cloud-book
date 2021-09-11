import React from 'react'
import NewNoteForm from './NewNoteForm'
import NoteItem from './NoteItem'

function Notes() {
    return (
        <div className = "container my-3">
            <NewNoteForm/>
            <NoteItem/>
        </div>
    )
}

export default Notes
