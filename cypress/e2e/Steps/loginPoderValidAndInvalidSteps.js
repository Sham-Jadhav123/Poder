import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../Pages/loginPage'

Given(/^Login page is Displayed$/, () => {
    loginPage.originPage()
});

Then(/^enter email "([^"]*)"$/, (email) => {
    cy.xpath('//*[@id="loginHeader"]/div').should('be.visible')
	loginPage.enterEmail(email)
    cy.wait(2000)
});

When(/^click on next button$/, () => {
	loginPage.yesButton()
    cy.wait(2000)
});

Then(/^enter password "([^"]*)"$/, (password) => {
    cy.xpath('//*[@id="loginHeader"]/div').should('be.visible')
	loginPage.enterPassword(password)
    cy.wait(2000)
});

Then(/^click on sign in button$/, () => {
	loginPage.yesButton()
    cy.wait(2000)
});

When(/^click on yes button$/, () => {
    // cy.xpath('//*[@id="lightbox"]/div[3]/div/div[2]/div/div[1]').should('be.visible')
	loginPage.yesButton()
    cy.wait(2000)
    loginPage.yesButton()
    cy.wait(2000)
});

Then(/^I validate home page title$/, () => {
	loginPage.titleHome()
});



