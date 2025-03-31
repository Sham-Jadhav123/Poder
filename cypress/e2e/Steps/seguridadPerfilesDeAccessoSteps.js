import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
// import seguridadModulePage from "../pom/seguridadModulePage";
// import seguridadPerfilesDAPage from "../pom/seguridadPerfilesDAPage";
import seguridadModulePage from "../Pages/seguridadModulePage";
import seguridadPerfilesDAPage from '../Pages/seguridadPerfilesDAPage'
var Profile=''

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

Then(/^I click on Perfiles De Accesso card$/, () => {
	seguridadPerfilesDAPage.clickPerfilesDeAccesso()
});

Then(/^I click on Agregar perfil button$/, () => {
	seguridadPerfilesDAPage.clickAgregarperfil()
});

Then(/^I enter name into Nombre del perfil field$/, () => {
	seguridadPerfilesDAPage.enterProfileName()
});

Then(/^I enter discription into Descripción del perfil field$/, () => {
	seguridadPerfilesDAPage.enterProfileDescription()
});

Then(/^I select 3 modules$/, () => {
	seguridadPerfilesDAPage.selectModules()
});

Then(/^I click on Guardar$/, () => {
	seguridadPerfilesDAPage.clickGuardar()
	cy.wait(2000)
});

Then(/^I search profile by name "([^"]*)"$/, (profile) => {
	Profile=profile
	seguridadPerfilesDAPage.searchProfile(profile)
});


Then(/^I click on view details button of profile$/, () => {
	seguridadPerfilesDAPage.clickViewDetails(Profile)
	cy.wait(2000)
});

Then(/^I click on edit profile option$/, () => {
	seguridadPerfilesDAPage.clickEditProfile(Profile)
	cy.wait(2000)
});

Then(/^I edit info - select 2 module$/, () => {
    cy.wait(2000)
	cy.contains('.form-check-sign','Sorteo').click()
    cy.wait(2000)
	cy.contains('.form-check-sign','Casos').click()
});

Then(/^I click on Guardar edit profile$/, () => {
	seguridadPerfilesDAPage.clickEditProfileGuardar()
	cy.wait(2000)
});

Then(/^I click on delete profile icon$/, () => {
	seguridadPerfilesDAPage.clickDeleteProfile(Profile)
});

Then(/^I click on Desactivar button$/, () => {
	seguridadPerfilesDAPage.desactivarButton()
	seguridadPerfilesDAPage.okButton()
});


Then(/^I click on OK button$/, () => {
	seguridadPerfilesDAPage.okButton()
});


Then(/^I click on Adición de usuarios masivos tab$/, () => {
	seguridadPerfilesDAPage.clickAdiciondeUsuariosMasivos()
});

Then(/^I select mandatory fields Perfil de Accesso$/, () => {
	seguridadPerfilesDAPage.selectMandatoryFieldPerfilDA()
});

Then(/^I upload valid excel file in Archivo field$/, () => {
	seguridadPerfilesDAPage.uploadFile()
});









