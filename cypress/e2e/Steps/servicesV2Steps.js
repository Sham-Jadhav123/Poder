import { Given,Then } from "cypress-cucumber-preprocessor/steps";
//import servicesPage from "../pom/servicesPage";
import servicesPage from '../Pages/servicesPage';
//import seguridadModulePage from "../pom/seguridadModulePage";
import moment from "moment";

// Given(/^I am logged in to the poder website with email and password$/, () => {
//     cy.fixture("loginData").then((data) => {
//         cy.loginWebsite(data.email, data.password)
//     })
// });
// Then(/^I am on home page of poder website$/, () => {
//     seguridadModulePage.titlePage()
// });

Then(/^I click on module "([^"]*)"$/, (moduleName) => {
	servicesPage.moduleClick(moduleName)
});


Then(/^I search procedure with tribunal, sala and date$/, () => {
	servicesPage.selectTribunalSSV2('CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL')
    servicesPage.selectSalaSSV2('TERCERA SALA DE LA CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL')
    cy.get('#txtFechaRecepcion').click()
    servicesPage.selectDate('4','Marzo','2025')
    cy.wait(2000)
});


Then(/^I click on search icon$/, () => {
	cy.get('#btnCriteroBusqueda').click()
    cy.wait(2000)
});

Then(/^I verify NUC number$/, () => {
	servicesPage.verifyNUC('2025-0000111')
    cy.wait(2000)
});

Then(/^I click on tramite icon$/, () => {
	servicesPage.clickTramiteIcon()
    cy.wait(3000)
});

Then(/^I click on Documentos tab$/, () => {
	servicesPage.clickOnDocumentos()
    cy.wait(3000)
});

Then(/^I click on cargar icon$/, () => {
	servicesPage.clickOnCargar()
    cy.wait(3000)
});

Then(/^I verify Cargar Documento page$/, () => {
	servicesPage.verifyCargarDocumentoPage()
    cy.wait(3000)
});

Then(/^I select Documento in Tipo de carga field$/, () => {
	servicesPage.selectTipoDeCarga()
    cy.wait(3000)
});

Then(/^I select one document from Tipo de documento field$/, () => {
	servicesPage.selectTipoDeDocumento()
    cy.wait(3000)

});

Then(/^I upload document in Cargar documento field$/, () => {
	cy.xpath('//*[@id="expediente-digital-entrada-documento-formulario-Archivo"]').selectFile('D:/New_Project/Poder/cypress/fixtures/4.pdf',{force:true})
    // cy.xpath('//*[@id="expediente-digital-entrada-documento-formulario-Archivo"]').attachFile('4.pdf',{force:true})
    cy.wait(2000)
});



Then(/^I select select date in Fecha del documento$/, () => {
	let date= moment()
    let d=date.format('YYYY-MM-DDThh:mm')
    cy.get('#expediente-digital-entrada-documento-formulario-FechaDocumento').click().type(d)
    cy.wait(2000)
});


Then(/^I select Tipo de Depositante as "([^"]*)"$/, (data) => {
	cy.get('#select2-expediente-digital-entrada-documento-formulario-IdTipoCalidad-container').click()
    servicesPage.searchCargerElement(data)
    cy.wait(2000)
});


Then(/^I select Depositante$/, () => {
    cy.xpath('//*[@id="cargar-depositante"]/div/span[1]/span[1]/span/ul/li/input').click()
	servicesPage.elementHilighted.click()
    cy.wait(2000)
});

Then(/^I click on Guardar SSV2$/, () => {
	cy.xpath('//*[@id="expediente-digital-entrada-documento"]/div/div/div[3]/button[2]').click()
    cy.wait(10000)
    // cy.xpath('/html/body/div[27]/div/div[6]/button[1]').click()
    cy.get('.swal2-confirm').click()
    cy.wait(10000)
});







