import React from 'react'

function NewNoteForm() {
    return (
        <div className = "my-5" style={{width:"50%"}}>
            <form>
                <div className="container">
                <div class="mb-3">
                    <label for="notetitle" class="form-label">Title of your Note: </label>
                    <input type="text" class="form-control" id="notetitle" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="notedesc" class="form-label">Description of your Note: </label>
                    <input type="text" class="form-control" id="notedesc"/>
                </div>
                <div class="mb-3">
                    <label for="notetag" class="form-label">Enter Tag: </label>
                    <input type="text" class="form-control" id="notetag"/>
                </div>


                <button type="submit" class="btn btn-primary">Add note</button>
                </div>
            </form>
        </div>
    )
}

export default NewNoteForm
