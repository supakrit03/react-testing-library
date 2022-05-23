import { useState } from "react";

import Input from "./Input";
import GuessedWord from "./GuessedWord";
import Congrats from "./Congrats";

const Jotto = () => {
  const [guessWord, setGuessWord] = useState("");

  return (
    <div className="d-flex flex-column justify-content-center mt-4 align-items-center">
      <h1>Jotto App</h1>
      <Input value={guessWord} onChange={(value) => setGuessWord(value)} />
      <GuessedWord />
      <Congrats />
    </div>
  );
};

export default Jotto;
