// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// import "cypress-cucumber-attach-screenshots-to-failed-steps";
// Import commands.js using ES2015 syntax:
import './commands';


// Cypress.on('uncaught:exception', (err, runnable) => {
//     // Ignore the error related to 'depositante' property being undefined
//     if (err.message.includes("Cannot read properties of undefined (reading 'depositante')")) {
//       return false; // Prevent Cypress from failing the test
//     }
//     return true; // Allow other uncaught exceptions to cause the test to fail
//   });