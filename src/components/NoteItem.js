import React from 'react'

function NoteItem(props) {

    const {title, description, tag} = props
    return (
        <div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            
                        </div>
                    </div>
                </div>
                
        </div>
        </div>

    )
}

export default NoteItem
