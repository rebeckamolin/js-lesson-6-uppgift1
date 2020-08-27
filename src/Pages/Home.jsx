import React from "react";
import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

export default function Home() {
  // const inputFirstName = useRef();
  // const inputLastName = useRef();

  // const handleOnClick = () => {
  //   setFirstName(inputFirstName.current.value);
  //   setLastName(inputLastName.current.value);
  // };

  const { firstName, setFirstName, lastName, setLastName } = useContext(
    NameContext
  );

  return (
    <div>
      <h1>Home Page</h1>
      <input
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="Ange Förnamn"
      />
      <input
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Ange Förnamn"
      />
      <p>
        {" "}
        Förnamn: <b>{firstName}</b>
      </p>
      <p>
        {" "}
        Efternamn: <b>{lastName}</b>
      </p>
    </div>
  );
}
