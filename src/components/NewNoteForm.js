import React, {useContext, useState} from 'react'
import NoteContext from '../contextAPI/NotesContext/NoteContext'


function NewNoteForm() {
    const fetchNote = useContext(NoteContext);
    const {addNote} = fetchNote

    const [Note, setNote] = useState({Title: "", Description: "", Tag: ""})

    const onClickChange = (event) => {
        event.preventDefault();
        addNote(Note.Title, Note.Description, Note.Tag)
    }

    const onChange = (event) => {
       
        setNote({...Note, [event.target.name]: event.target.value})
    }

   



    return (
        <div className = "my-5" style={{width:"50%"}}>
            <form>
                <div className="container">
                <div class="mb-3">
                    <label for="Title" class="form-label">Title of your Note: </label>
                    <input type="text" class="form-control" id="Title" name = "Title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div class="mb-3">
                    <label for="Description" class="form-label">Description of your Note: </label>
                    <input type="text" class="form-control" name = "Description" id="Description" onChange={onChange} />
                </div>
                <div class="mb-3">
                    <label for="Tag" class="form-label">Enter Tag: </label>
                    <input type="text" class="form-control" name = "Tag" id="Tag" onChange={onChange} />
                </div>


                <button class="btn btn-primary" onClick={onClickChange}>Add note</button>
                </div>
            </form>
        </div>
    )
}

export default NewNoteForm
