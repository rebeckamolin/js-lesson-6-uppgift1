import React from "react";
import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

export default function About() {
  const { firstName, lastName } = useContext(NameContext);
  return (
    <div>
<<<<<<< HEAD
      <h1>About Page</h1>
      <p>
        Welcome to your the page about you, {firstName} {lastName}!
      </p>
=======
      <h1>About</h1>
      <p> Förnamn: <b>{firstName}</b></p>
      <p> Efternamn: <b>{lastName}</b></p>
>>>>>>> b2626ce173e496e79d89b597e425e56e894146a6
      <p></p>
    </div>
  );
}
