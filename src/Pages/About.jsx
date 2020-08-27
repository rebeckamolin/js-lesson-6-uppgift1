import React from "react";
import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

export default function About() {
  const { firstName, lastName } = useContext(NameContext);
  return (
    <div>
      <h1>About</h1>
      <p> Förnamn: <b>{firstName}</b></p>
      <p> Efternamn: <b>{lastName}</b></p>
      <p></p>
    </div>
  );
}
