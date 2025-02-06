import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  it("renders quiz component correctly", () => {
    mount(<Quiz />);
    cy.get("[data-cy=quiz-container]").should("exist");
  });

  it("displays 10 questions", () => {
    mount(<Quiz />);
    cy.get("[data-cy=question]").should("have.length", 10);
  });

  it("allows users to select an answer", () => {
    mount(<Quiz />);
    cy.get("[data-cy=answer-option]").first().click();
    cy.get("[data-cy=answer-option]").first().should("have.class", "selected");
  });
});
