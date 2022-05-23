import { FC } from "react";

type Props = {
  guessedWords?: string[];
};

const GuessedWord: FC<Props> = ({ guessedWords = [] }) => {
  return (
    <div data-testid="guessed-word">
      {guessedWords.length === 0 && (
        <div data-testid="guessed-instruction">
          Try to guessed the secret word !
        </div>
      )}
    </div>
  );
};

export default GuessedWord;
