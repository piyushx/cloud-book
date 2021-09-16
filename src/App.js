import React, { Profiler } from "react";
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
      <Navbar/>

        <Switch>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/allNotes">
            <AllNotes/>
          </Route>
          <Route exact path="/">
          <Homepage/>
          </Route>
          <Route exact path="/create">
            <Notes/>
          </Route>

        </Switch>

      </Router>
      </NoteState>
    </>
  )

}

export default App;
