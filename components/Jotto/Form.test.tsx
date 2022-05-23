import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Jotto app", () => {
  const mockOnSubmit = jest.fn((e) => {
    e.preventDefault();
    e.target.reset();
    return e;
  });

  it("should render without errors", () => {
    const { getByTestId } = render(<Form onSubmit={mockOnSubmit} />);

    expect(getByTestId("guess-input")).toBeInTheDocument;
  });

  it("should called onSubmit when clicked submit button.", async () => {
    const { getByTestId } = render(<Form onSubmit={mockOnSubmit} />);
    await userEvent.click(getByTestId("submit-button"));

    expect(mockOnSubmit).toBeCalled();
  });

  it("should clear state when clicked submit button.", async () => {
    const { getByTestId } = render(<Form onSubmit={mockOnSubmit} />);
    const text = "banana";
    await userEvent.type(getByTestId("guess-input"), text);
    await userEvent.click(getByTestId("submit-button"));

    expect(getByTestId("guess-input")).toHaveValue("");
  });
});
