import React from "react";
import Navbar from "./components/Navbar"
import Notes from "./components/CreateNote"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from "./components/Profile";
import AllNotes from "./components/AllNotes";
import NoteState from "./contextAPI/NotesContext/NoteState";
import Homepage from "./components/Homepage"


const App = () => {
  return (
    <>
    <NoteState>

      <Router>

        <Switch>
          <Route exact path="/profile">
          <Navbar/>
            <Profile/>
          </Route>
          <Route exact path="/allNotes">
          <Navbar/>
            <AllNotes/>
          </Route>
          <Route exact path="/">
          <Navbar/>
          <Homepage/>
          </Route>
          <Route exact path="/create">
          <Navbar/>
            <Notes/>
          </Route>

        </Switch>

      </Router>
      </NoteState>
    </>
  )

}

export default App;
