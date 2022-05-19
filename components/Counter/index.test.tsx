import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter component", () => {
  it("should do render without error", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Increment")).toBeInTheDocument;
  });

  it("should do initially start with text of 0", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("counter").textContent).toBe("0");
  });

  it("should do counter increment", async () => {
    const { getByTestId, getByText } = render(<Counter />);

    await userEvent.click(getByText(/Increment/i));

    expect(getByTestId("counter").textContent).toBe("1");
  });
});
