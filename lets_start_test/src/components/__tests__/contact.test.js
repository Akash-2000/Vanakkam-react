import { render, screen } from "@testing-library/react";

import Contact from "../Contact";

describe("Contact use page test cases", () => {
  it("should contact render correctly", () => {
    render(<Contact />);
  });

  it("should contain 1 heading", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("paragraph");

    //asertion
    expect(heading.length).toBe(1);
  });

  it("should contain 2 input only", () => {
    render(<Contact />);

    const Input = screen.getAllByRole("textbox");
    //assertion
    expect(Input.length).toBe(2);
  });
});
