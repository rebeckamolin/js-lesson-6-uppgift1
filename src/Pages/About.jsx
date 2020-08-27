import React from "react";
import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

export default function About() {
  const { firstName, setFirstName } = useContext(NameContext);
  return (
    <div>
      <h1>About</h1>
      <p>{firstName}</p>
      <p></p>
    </div>
  );
}
