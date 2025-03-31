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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

import SignIn from "../e2e/Pages/SignIn_Pages"
// Cypress.Commands.add('login', (Uemail, pw) => {
//     SignIn.Launch();
//     SignIn.Enter_Username(Uemail);
//     SignIn.Click_On_Next();
//     SignIn.Enter_Password(pw);
//     SignIn.Click_On_SignIn_Btn();
//     SignIn.Select_Option();

// })
Cypress.Commands.add('login', (Uemail, pw) => {
  cy.session([Uemail, pw], () => {
    // const loginPage = new LoginPage();
    // loginPage.visit();
    // loginPage.login(Uemail, pw);
     SignIn.Launch();
    SignIn.Enter_Username(Uemail);
    SignIn.Click_On_Next();
    SignIn.Enter_Password(pw);
    SignIn.Click_On_SignIn_Btn();
    SignIn.Select_Option();

  });
});

//Add any custom Cypress commands you want here
Cypress.Commands.add('storeNUC', () => {
  cy.get('#swal2-html-container > strong').invoke('text').then((text) => {
    Cypress.env('nuc', text);  // Store NUC globally
    cy.log('Stored NUC:', text);
  });
});



Cypress.on('uncaught:exception', (err) => {
   // Ignore errors related to 'focus' or other known errors
   if (err.message.includes('Cannot read properties of undefined') && err.message.includes('focus')) {
     return false; // Prevent the test from failing
   }
   return true; // Allow other errors to cause failure
 });

// support/commands.js

// Cypress.Commands.add('storeNUCInLocalStorage', () => {
//   cy.get('#swal2-html-container > strong').invoke('text').then((text) => {
//     // Store NUC in localStorage
//     window.localStorage.setItem('nuc', text);
//     cy.log('Stored NUC in localStorage:', text);
//   });
// });


// // support/commands.js

// Cypress.Commands.add('getNUCFromLocalStorage', () => {
//   const nuc = window.localStorage.getItem('nuc');  // Get NUC from localStorage
//   cy.wrap(nuc).as('nuc');  // Wrap the NUC value as an alias
//   cy.log('Retrieved NUC from localStorage:', nuc);
// });




// support/commands.js
// Cypress.Commands.add('storeNUCInCookie', () => {
//   cy.get('#swal2-html-container > strong').invoke('text').then((text) => {
//     // Store NUC in a cookie
//     cy.setCookie('nuc', text);
//     cy.log('Stored NUC in Cookie:', text);
//   });
// });

// Cypress.Commands.add('getNUCFromCookie', () => {
//   cy.getCookie('nuc').then((cookie) => {
//     cy.wrap(cookie.value).as('nuc');  // Get the NUC from the cookie
//     cy.log('Retrieved NUC from Cookie:', cookie.value);
//   });
// });


// beforeEach(() => {
//   let currentIndex = Cypress.env('index') || 0; // Defaults to 2 if not set
//   currentIndex += 1; // Increment the index
//   Cypress.env('index', currentIndex); // Save the updated index for the next test run
//   cy.log('Current Index:', currentIndex);
// });
Cypress.Commands.add('urlRedirect',()=>{
// support/commands.js
   cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;
      });
   });
 })