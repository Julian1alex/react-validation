import React from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Form from  "./Form"
import Submitted from "./Submitted"

function App() {
  return (
  <Router>
    <div>
      <Route exact path="/" component={Form}/>
      <Route path="/submitted" component={Submitted}/>
  </div>
  </Router>
  )
}

export default App
