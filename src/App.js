import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NameContext } from "./Contexts/NameContext";

function App() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  return (
    <div>
      <Router>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>

<<<<<<< HEAD
        <NameContext.Provider
          value={{ firstName, setFirstName, lastName, setLastName }}
        >
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </NameContext.Provider>
      </Router>
    </div>
=======
      <NameContext.Provider value={{ firstName, lastName }}>
        <Switch>
          <Route exact path="/">
            <Home setFirstName={setFirstName} setLastName={setLastName} />
          </Route>

          <Route path="/about">
            <About firstName={firstName} lastName={lastName} />
          </Route>
        </Switch>
      </NameContext.Provider>
    </Router>
>>>>>>> b2626ce173e496e79d89b597e425e56e894146a6
  );
}

export default App;
