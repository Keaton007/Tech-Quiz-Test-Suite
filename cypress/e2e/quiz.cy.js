describe("Tech Quiz End-to-End Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("loads the quiz page", () => {
      cy.get("[data-cy=quiz-container]").should("exist");
    });
  
    it("allows users to take a quiz", () => {
      cy.get("[data-cy=answer-option]").each(($el) => {
        cy.wrap($el).click();
      });
  
      cy.get("[data-cy=submit-button]").click();
      cy.get("[data-cy=score-display]").should("exist");
    });
  });
  