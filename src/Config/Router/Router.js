import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home,About} from '../../Contaniers'

function BasicExample() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
    </Router>
  );
}
export default BasicExample