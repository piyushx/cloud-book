import React, {useContext, useEffect} from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../contextAPI/NotesContext/NoteContext'



function Home() {

    const fetchNote = useContext(NoteContext);
    const {Note, getAll} = fetchNote

    useEffect(() => {
        getAll()
    }, [])

    console.log(Note);

    return (
        <div className="container my-5">
            <h3 className="my-2">Hey Piyush! Here are your Notes: </h3>
            <div className="row">
            {Note.map((eachNote)=> 
                <div className = "col-md-4"><NoteItem Title = {eachNote.Title} Description = {eachNote.Description} Tag = {eachNote.Tag} Key = {eachNote._id} /></div>
            )}
            </div>
           
        </div>
    )

}

export default Home
