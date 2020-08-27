import React from "react";
import { useContext } from "react";
import { NameContext } from "../Contexts/NameContext";

<<<<<<< HEAD
export default function Home() {
  // const inputFirstName = useRef();
  // const inputLastName = useRef();

  // const handleOnClick = () => {
  //   setFirstName(inputFirstName.current.value);
  //   setLastName(inputLastName.current.value);
  // };
=======
export default function Home({ setFirstName, setLastName }) {
  const inputFirstName = useRef();
  const inputLastName = useRef();
>>>>>>> b2626ce173e496e79d89b597e425e56e894146a6

  const { firstName, setFirstName, lastName, setLastName } = useContext(
    NameContext
  );

  return (
    <div>
<<<<<<< HEAD
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
=======
      <h1>HOME</h1>
      <input ref={inputFirstName} type="text" placeholder="Ange Förnamn" />
      <input ref={inputLastName} type="text" placeholder="Ange Efternamn" />
      <button onClick={handleOnClick}>Send</button>
>>>>>>> b2626ce173e496e79d89b597e425e56e894146a6
    </div>
  );
}
