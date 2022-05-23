import { render, screen } from "@testing-library/react";
import Jotto from "./index";

describe("Jotto app", () => {
  it("should render without errors", () => {
    render(<Jotto />);

    expect(screen.getByText(/Jotto App/i)).toBeInTheDocument;
  });
});
