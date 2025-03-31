import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
//import seguridadModulePage from "../pom/seguridadModulePage";

//import seguridadModulePage from '../Pages/SeguridadPage';
import seguridadModulePage from "../Pages/seguridadModulePage";
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

Then(/^I click on Usuario card$/, () => {
    seguridadModulePage.usuariosCard()
    cy.wait(2000)
});

Then(/^I validate users list$/, () => {
	seguridadModulePage.userList()
    cy.wait(2000)
});

Then(/^I search user by email$/, () => {
	seguridadModulePage.searchUser()
    cy.wait(2000)
});

Then(/^I click on edit option$/, () => {
	seguridadModulePage.editIcon()
});

Then(/^I validate Asignar Permisos Tab$/, () => {
    seguridadModulePage.asignarPermisos()
    cy.wait(2000)
});

Then(/^I validate Permisos Actuales Tab$/, () => {
	seguridadModulePage.permisosActuales()
    cy.wait(2000)
});


Then(/^I select mandatory fields usuarios$/, () => {
    cy.wait(2000)
	seguridadModulePage.selectPerfile()
    cy.wait(2000)
    seguridadModulePage.selectSede()
    cy.wait(2000)
    seguridadModulePage.selectDistrito()
    cy.wait(2000)
    seguridadModulePage.selectTribunal()
    cy.wait(2000)
    seguridadModulePage.selectSala()
    cy.wait(2000)
});

Then(/^I click on Guardar$/, () => {
    cy.wait(2000)
    seguridadModulePage.guardarClick()
});


Then(/^I goto Permisos Actuales tab$/, () => {
    cy.wait(3000)
	seguridadModulePage.permisosActuales()
});

Then(/^I click on edit option of Permisos$/, () => {
	seguridadModulePage.editOptionPermisosActual()
    
});

Then(/^I click on delete option of Permisos$/, () => {
	seguridadModulePage.deleteOptionPermisosActual()
});

Then(/^I search permission by name or sala$/, () => {
	seguridadModulePage.searchPermisos()
});








