import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "../components/Comment";

const data = {
  name: "Janey",
  message: "morbi vestibulum velit",
  rating: 5,
};

describe("Comment", () => {
  it("Should render the comment data", async () => {
    const { name, message, rating } = data;
    render(<Comment name={name} rating={rating} message={message} />);

    expect(screen.getByTestId("name").textContent).toBe("Janey");
    expect(screen.getByTestId("message").textContent).toBe(
      "morbi vestibulum velit"
    );
  });
});
