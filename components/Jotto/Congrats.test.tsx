import { render, screen } from "@testing-library/react";

import Congrats from "./Congrats";

describe("Congrats component", () => {
  const setup = (props = {}) => render(<Congrats {...props} />);

  it("should render without errors", () => {
    setup();
    expect(screen.getByTestId("congrats")).toBeInTheDocument();
  });

  it("should render no text when `success` prop is false", () => {
    setup({ success: false });
    expect(screen.getByTestId("congrats").textContent).toBe("");
  });

  it("should render Congrats when `success` prop is true", () => {
    setup({ success: true });
    expect(screen.getByTestId("congrats").textContent).toBe("Congrats");
  });
});
