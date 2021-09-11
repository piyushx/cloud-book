import React from 'react'
import NoteItem from './NoteItem'


function Home() {
    return (
        <div className="container my-5">
            <h3 className="my-5">Hey Piyush! Here are your Notes: </h3>
            <NoteItem title = "My note 1" description = "This is the descriptio" tag = "Personal"/>
        </div>
    )
}

export default Home
