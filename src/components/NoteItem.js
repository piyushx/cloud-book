import React, {useContext, useEffect} from 'react'
import NoteContext from '../contextAPI/NotesContext/NoteContext'

function NoteItem(props) {

    
    const deleteNote = useContext(NoteContext)

    const {deleteNoteOne} = deleteNote

    const {Title, Description, Key, Tag, updateNote} = props


    return (
        <div>
            <div className="row">
                <div className="col-sm-11 my-4">
                    <div className="card p-2">
                        <div className="card-body">
                        <div class="d-flex justify-content-between">
                        <h5 className="card-title mb-4">{Title}</h5>
                        <div>
                        <i class="fas fa-pen-square mx-4" onClick={()=> updateNote(Key, Title, Description, Tag)}></i>
                             <i class="fas fa-trash" onClick={()=> deleteNoteOne(Key)}></i>
                        </div>

                        </div>
                       
                           
                          
                            <p className="card-text">{Description}</p>
                            
                        </div>
                    </div>
                </div>
                
        </div>
        </div>

    )
}

export default NoteItem
