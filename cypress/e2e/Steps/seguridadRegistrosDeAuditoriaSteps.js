import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// import seguridadModulePage from "../pom/seguridadModulePage";
// import seguridadRegistrosDAPage from "../pom/seguridadRegistrosDAPage";

import seguridadModulePage from '../Pages/seguridadModulePage'
import seguridadRegistrosDAPage from '../Pages/seguridadRegistrosDAPage'

// Given(/^I am logged in to the poder website with email and password$/, () => {
//     cy.fixture("loginData").then((data) => {
//         cy.loginWebsite(data.email, data.password)
//     })
// });

// Then(/^I am on home page of poder website$/, () => {
//     seguridadModulePage.titlePage()
    
// });

When(/^I click on module Seguridad$/, () => {
    seguridadModulePage.moduleClick()
});

Then(/^I validate all five card$/, () => {
    seguridadModulePage.validateAllCard()
    cy.wait(2000)
});


Then(/^I click on Registros de auditoría card$/, () => {
	seguridadRegistrosDAPage.clickModule()
    cy.wait(3000)
});

Then(/^I click on Registros de auditoría tab$/, () => {
	seguridadRegistrosDAPage.clickTabRegistrosdeAuditoria()
});

Then(/^I select filter in fecha field "([^"]*)" dropdown$/, (filter) => {
	seguridadRegistrosDAPage.selectFilterSeleccionarTiempo(filter)
    cy.wait(3000)
});


Then(/^I click on search icon$/, () => {
	seguridadRegistrosDAPage.clickSearchIconR()

    cy.wait(30000)
});


