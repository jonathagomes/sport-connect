import { render } from "@testing-library/react";
import { Button } from "./index";

describe("Button Component", () => {
  it("Should render the Button component", () => {
    const { getByText } = render(<Button />);

    const button = getByText("Button");

    expect(button).toBeInTheDocument();
  });
});
