import React, { FC } from "react";

type Props = {
  onSubmit: (value: any) => void;
};
const Input: FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input data-testid="guess-input" name="guessWord" />
        <button data-testid="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Input;
