import React from "react";
import { render, screen } from "@testing-library/react";
import Comments from "../Comments";
import "@testing-library/jest-dom/extend-expect";

const data = [
  {
    name: "Janey",
    message: "morbi vestibulum velit",
  },
  {
    name: "Whitney",
    message: "sapien arcu sed augue aliquam",
  },
  {
    name: "Allen",
    message: "luctus rutrum nulla tellus",
  },
];

describe("Comments List", () => {
  it("Should render the correct comments", () => {
    render(<Comments comments={data} />);

    const commentsList = screen.getAllByTestId("comment");

    expect(commentsList).toHaveLength(3);
  });
});
