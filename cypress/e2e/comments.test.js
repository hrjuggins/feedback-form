// <reference types="Cypress" />

import React from "react";
// eslint-disable-next-line import/no-unresolved
import { mount } from "@cypress/react";
import Comments from "../../src/components/Comments";

it("contains the correct number of comments", () => {
  const comments = [
    {
      name: "Janey",
      email: "jrykerti@vistaprint.com",
      rating: 3,
      comment: "morbi vestibulum velit",
    },
    {
      name: "Whitney",
      email: "wfollitj@xing.com",
      rating: 3,
      comment: "sapien arcu sed augue aliquam",
    },
  ];

  mount(<Comments comments={comments} />);
  // the component starts running like a mini web app
  cy.get("[data-testid=comments]").should("have.length", comments.length);
});
