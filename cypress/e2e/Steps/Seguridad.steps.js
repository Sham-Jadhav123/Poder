import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import SeguridadPage from "../pages/SeguridadPage";

// beforeEach(()=>
// {
//     cy.task('clearScreenshots');

// })
Given("I am on Seguridad Option", () => {
	SeguridadPage.Validate();
});

Then("I should see the Usuario Container", () => {
	SeguridadPage.Avaiable();
});

When("I Click on Usuario Container", () => {
	SeguridadPage.ClickUsuario();
});

Then("I Should see the Search Bar", () => {
    SeguridadPage.SearchBar();

});

When("I click on addicon", () => {
	SeguridadPage.Addicon();
});

Then("I should have Consultar Usuario", () => {
	SeguridadPage.CheckTitle();
});

Then("I should See the Search bar", () => {
	SeguridadPage.searchBarIn();
});

// When("I Put the Input into Search Bar", () => {
// 	SeguridadPage.TypeInSearch();
// });

When("I Put the {string} into Search Bar", (Buscar) => {
	SeguridadPage.TypeInSearch(Buscar);
});


When("I click on Search Button", () => {
	SeguridadPage.Search();
});

Given("I am on Asignar Section", () => {
	SeguridadPage.ValidateAssign();
});

// When("I click on Dropdown Perfil and select", () => {
// 	SeguridadPage.DropDownPerfil();
// });


When("I click on Dropdown Perfil and select {string}", (Perfil) => {
	SeguridadPage.DropDownPerfil(Perfil);
});

Then("I click on Distrito Judicial", () => {
	SeguridadPage.ClickDistrito();
});

When("I Search Distrito Judicial into SearchBox And Select", () => {
	SeguridadPage.DropDownDistrito();
});

Then("I click on sede dropdown search and select the option", () => {
	SeguridadPage.DropdownSede();
});

Then("I click on Tribunal Dropdown Search and select the option", () => {
	SeguridadPage.DropdownTribunal();
});

after(() => {
    cy.screenshot(); 
  });
  
