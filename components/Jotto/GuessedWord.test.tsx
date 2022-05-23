import { render, screen } from "@testing-library/react";

import GuessedWord from "./GuessedWord";

describe("GuessedWord component", () => {
  const setup = (props = {}) => render(<GuessedWord {...props} />);
  const findElement = (testId: string) => screen.getByTestId(testId);

  it("should render without errors", () => {
    setup();
    expect(findElement("guessed-word")).toBeInTheDocument();
  });

  it("should render instruction to guess a word when `guessedWords` is empty", () => {
    setup({ guessedWords: [] });

    expect(findElement("guessed-instruction")).toBeInTheDocument();
  });

  it("shouldn't render instruction to guess a word when `guessedWords` isn't empty", () => {
    const { queryByText } = setup({ guessedWords: ["foo"] });

    expect(queryByText("guessed-instruction")).not.toBeInTheDocument();
  });
});
