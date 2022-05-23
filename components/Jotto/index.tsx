import { useState } from "react";

import Form from "./Form";
import GuessedWord from "./GuessedWord";
import Congrats from "./Congrats";

const Jotto = () => {
  const [guessWord, setGuessWord] = useState("");

  return (
    <div className="d-flex flex-column justify-content-center mt-4 align-items-center">
      <h1>Jotto App</h1>
      <Form
        onSubmit={(e: any) => {
          e.preventDefault();
          setGuessWord(e.target["guessWord"].value);
          e.target.reset();
        }}
      />
      <GuessedWord />
      <Congrats />
    </div>
  );
};

export default Jotto;
