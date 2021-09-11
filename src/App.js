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


const App = () => {
  return (
    <>

      <Router>
      <Navbar/>

        <Switch>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/">
            <AllNotes/>
          </Route>
          <Route exact path="/create">
            <Notes/>
          </Route>

        </Switch>

      </Router>
    </>
  )

}

export default App;
