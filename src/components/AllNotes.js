import React, {useContext, useEffect, useRef, useState} from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../contextAPI/NotesContext/NoteContext'



function Home() {

    const fetchNote = useContext(NoteContext);
    const {Note, getAll, updateOne} = fetchNote

    useEffect(() => {
        getAll()
    }, [])

    const refe = useRef(null)
    const refer = useRef(null)



    const [Notes, setNotes] = useState({eid: "", eTitle: "", eDescription: "", eTag: ""})

    const updateNote = ( eid, eTitle, eDescription, eTag) => {
        refe.current.click()
        setNotes({eid, eTitle, eDescription, eTag})
    }
    
    const onClickChange = (event) => {
        updateOne(Notes.eid, Notes.eTitle, Notes.eDescription, Notes.eTag)
        event.preventDefault(); 
        refer.current.click()
    }

    const onChange = (e) => {
        setNotes({ ...Notes, [e.target.name]: e.target.value })
    }

    return (
<>
        <button type="button"  ref={refe} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#updateModal">
        Launch demo modal
    </button>

    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update your note</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div className="container">
                        <div class="mb-3">
                            <label for="Title" class="form-label">Title of your Note: </label>
                            <input type="text" class="form-control" id="eTitle" value={Notes.eTitle} onChange={onChange} name="eTitle" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="Description" class="form-label">Description of your Note: </label>
                            <input type="text" class="form-control" value={Notes.eDescription} onChange={onChange} name="eDescription" id="eDescription" />
                        </div>
                        <div class="mb-3">
                            <label for="Tag" class="form-label">Enter Tag: </label>
                            <input type="text" class="form-control" value={Notes.eTag} onChange={onChange} name="eTag" id="eTag" />
                        </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={refer}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={onClickChange}>Update Note</button>
                </div>
            </div>
        </div>
    </div>

        <div className = "container my-3">
            <h3 className="my-4">Hey Piyush, Here are all the notes: </h3>
            <div className="row">
            {Note.map((eachNote)=> 
                <div className = "col-md-4"><NoteItem Title = {eachNote.Title} updateNote = {updateNote} Description = {eachNote.Description} Tag = {eachNote.Tag} Key = {eachNote._id} /></div>
            )}
            </div>
        </div>
        </>
    )

}

export default Home
