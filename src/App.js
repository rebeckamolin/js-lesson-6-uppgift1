import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NameContext } from "./Contexts/NameContext";
import { Link } from "react-router-dom";

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  return (
    <Router>
      <nav>
        <Link to="/about">ABOUT</Link>
      </nav>

      <NameContext.Provider value={{ firstName, lastName }}>
        <Switch>
          <Route path="/">
            <Home firstName={firstName} setFirstName={setFirstName} />
          </Route>

          <Route path="/about">
            <About firstName={firstName} lastName={lastName} />
          </Route>
        </Switch>
      </NameContext.Provider>
    </Router>
  );
}

export default App;
