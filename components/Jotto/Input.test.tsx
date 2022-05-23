import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Jotto app", () => {
  it("should render without errors", () => {
    const { getAllByRole } = render(<Input />);

    expect(getAllByRole("textbox")).toBeInTheDocument;
  });
});
