import React from "react";
import { useRef, useState } from "react";
import { NameContext } from "../Contexts/NameContext";


export default function Home() {
  const inputFirstName = useRef();
  const inputLastName = useRef();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  const handleOnClick = () => {
    setFirstName(inputFirstName.current.value);
    setLastName(inputLastName.current.value);
  };

  return (
    <div>


        <h1>HOME</h1>
        <input ref={inputFirstName} type="text" placeholder="Ange Förnamn" />
        <input ref={inputLastName} type="text" placeholder="Ange Efternamn" />
        <button onClick={handleOnClick}>Send</button>

    </div>
  );
}
