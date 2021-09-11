import React, {useContext} from 'react'
import NoteContext from '../contextAPI/NotesContext/NoteContext'

function NoteItem(props) {

    const deleteNote = useContext(NoteContext)

    const {deleteNoteOne} = deleteNote

    const {Title, Description, Tag} = props
    return (
        <div>
            <div className="row">
                <div className="col-sm-11 my-4">
                    <div className="card p-2">
                        <div className="card-body">
                        <div class="d-flex justify-content-between">
                        <h5 className="card-title mb-4">{Title}</h5>
                        <div>
                        <i class="fas fa-pen-square mx-4"></i>
                             <i class="fas fa-trash" onClick={()=> deleteNoteOne(Tag)}></i>
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
