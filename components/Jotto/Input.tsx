import React, { FC } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};
const Input: FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        data-testid="guess-input"
        onChange={(e) => onChange(e.target.value)}
      />
      <button data-testid="submit-button">Submit</button>
    </div>
  );
};

export default Input;
