import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Jotto app", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<Input value="" onChange={() => {}} />);

    expect(getByTestId("guess-input")).toBeInTheDocument;
  });

  it("should update state when typing input.", async () => {
    const mockOnChange = jest.fn();

    const { getByTestId } = render(<Input value="" onChange={mockOnChange} />);
    const text = "banana";
    await userEvent.type(getByTestId("guess-input"), text);

    expect(mockOnChange).toBeCalledTimes(text.length);
  });

  it("should clear state when clicked submit button.", async () => {
    const mockOnChange = jest.fn();

    const { getByTestId } = render(<Input value="" onChange={mockOnChange} />);
    const text = "banana";
    await userEvent.type(getByTestId("guess-input"), text);
    await userEvent.click(getByTestId("submit-button"));

    expect(getByTestId("guess-input").getAttribute("value")).toBe("");
  });
});
