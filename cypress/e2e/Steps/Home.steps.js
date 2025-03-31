import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";


Given("I am going to burger Menu", () => {
	HomePage.ClickOnMenu();
});


Then("I verify the Username", () => {
	HomePage.VerifyUser();
    cy.wait(2000);
});
