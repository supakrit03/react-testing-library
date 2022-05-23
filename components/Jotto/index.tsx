import React from "react";

import GuessedWord from "./GuessedWord";
import Congrats from "./Congrats";

const Jotto = () => {
  return (
    <div className="d-flex flex-column justify-content-center mt-4 align-items-center">
      <h1>Jotto App</h1>
      <GuessedWord />
      <Congrats />
    </div>
  );
};

export default Jotto;
