import React from 'react'
import NewNoteForm from './NewNoteForm'
import NoteItem from './NoteItem'

function Notes() {
    return (
        <div className = "container my-3">
            <NewNoteForm/>
            <NoteItem title = "My note 1" description = "This is the description" tag = "Personal"/>
        </div>
    )
}

export default Notes
