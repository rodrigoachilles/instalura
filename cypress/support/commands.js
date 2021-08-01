// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import { BASE_URL } from '../../src/infra/env';
import { LOGIN_COOKIE_APP_TOKEN } from '../../src/services/login';

// -- This is a parent command --
Cypress.Commands.add('login', (pageUrl) => {
  cy.request({
    method: 'POST',
    url: `${BASE_URL}/api/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    // form: true,
    body: {
      username: 'cypresstest',
      password: 'senhasegura',
    },
  }).then((response) => {
    if (response && response.status === 201 && response.body) {
      const { token } = response.body['data'];
      cy.setCookie(LOGIN_COOKIE_APP_TOKEN, token);
      cy.visit(pageUrl);
    }
  });
});

Cypress.Commands.add('logout', () => {
  cy.clearCookies();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
