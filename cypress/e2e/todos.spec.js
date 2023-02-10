import { generateFakeData } from "../support/methods/generate-data";
const todoItem = generateFakeData().items.name;

describe("Login form tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Enter todo item", () => {
    cy.addTodoItem(todoItem);
    cy.assertNumberOfElementsOnList("1");
    cy.assertItemsLeftCount("1");
  });

  it("Check if completed item is on completed list", () => {
    cy.addTodoItem(todoItem);
    cy.assertNumberOfElementsOnList("1")
    cy.toggleTodoItemComplete(todoItem);
    cy.assertItemsLeftCount("0");
    cy.findByText("Completed").click();
    cy.assertElementOnTodoList(todoItem, true);
    cy.assertNumberOfElementsOnList("1")
    cy.findByText("Active").click();
    cy.assertElementOnTodoList(todoItem, false);
    cy.assertNumberOfElementsOnList("0")
  });
});
