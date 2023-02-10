/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
import { mainPageSelectors } from "../support/selectors/mainPage";

Cypress.Commands.add("addTodoItem", (value) => {
  cy.get(mainPageSelectors.inputs.todo).type(value + "{enter}");
  cy.assertElementOnTodoList(value, true);
});

Cypress.Commands.add("assertElementOnTodoList", (value, result) => {
  if (result === true)
    cy.get(mainPageSelectors.lists.todoList)
      .find(mainPageSelectors.lists.list_item)
      .contains(value)
      .should("be.visible");
  else {
    cy.get(mainPageSelectors.lists.todoList)
      .contains(value)
      .should("not.exist");
  }
});

Cypress.Commands.add("assertNumberOfElementsOnList", (value) => {
  cy.get(mainPageSelectors.lists.todoList)
    .find("li")
    .should("have.length", value);
});

Cypress.Commands.add("assertItemsLeftCount", (value) => {
  cy.get(mainPageSelectors.lists.todo_count).should("contain", value);
});

Cypress.Commands.add("toggleTodoItemComplete", (value) => {
  cy.get(mainPageSelectors.lists.todoList)
    .contains(value)
    .parent()
    .find(mainPageSelectors.lists.item_complete_toggle)
    .check()
    .should("be.checked");
});
