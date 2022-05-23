import { FC } from "react";

type Props = {
  guessedWords?: { guessedWord: string }[];
};

const GuessedWord: FC<Props> = ({ guessedWords = [] }) => {
  return (
    <div data-testid="guessed-word">
      {guessedWords.length === 0 && (
        <div data-testid="guessed-instruction">
          Try to guessed the secret word !
        </div>
      )}

      {guessedWords.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>No.</th>
            </tr>
            <tr>
              <th>Guess word</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map(({ guessedWord }, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{guessedWord}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GuessedWord;
