import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "../components/Comment";

const data = {
  name: "Janey",
  message: "morbi vestibulum velit",
};

describe("Comment", () => {
  it("Should render the correct comment data", async () => {
    const { name, message } = data;
    render(<Comment name={name} message={message} />);

    expect(screen.getByTestId("name").textContent).toBe("Janey");
    expect(screen.getByTestId("message").textContent).toBe(
      "morbi vestibulum velit"
    );
  });
});
