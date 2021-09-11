import React from 'react'
import NewNoteForm from './NewNoteForm'
import NoteItem from './NoteItem'

function Notes() {
    return (
        <div className = "container my-3">
            <NewNoteForm/>
            <h3 className="my-4">Your recent notes: </h3>
            <NoteItem title = "My note 1" description = "This is the description" tag = "Personal"/>
        </div>
    )
}

export default Notes
