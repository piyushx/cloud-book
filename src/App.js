import React from "react";
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";


const App = () => {
  return (
    <>

      <Router>
      <Navbar/>

        <Switch>
          <Route exact path="/">
            <Notes/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>

        </Switch>

      </Router>
    </>
  )

}

export default App;
