import React from "react";
import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

export default function About() {
  const { firstName, lastName } = useContext(NameContext);
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Welcome to your the page about you, {firstName} {lastName}!
      </p>
      <p></p>
    </div>
  );
}
