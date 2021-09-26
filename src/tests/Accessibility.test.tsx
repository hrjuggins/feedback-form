import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import App from "../App";

describe("The <App/> component", () => {
  it("should not fail any accessibility tests", async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
