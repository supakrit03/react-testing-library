import { render, screen } from "@testing-library/react";

import Counter from "./index";

describe("Counter component", () => {
  it("renders a counter", () => {
    render(<Counter />);

    expect(screen.getAllByText("index")).toContain;
  });
});
