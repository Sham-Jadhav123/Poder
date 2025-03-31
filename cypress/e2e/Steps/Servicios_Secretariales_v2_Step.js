import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps'
import Servicios_Secretariales_v2 from '../Pages/Servicios_Secretariales_v2_Pages'

const Servicios_v2=new Servicios_Secretariales_v2();

// let currentIndex = Cypress.env('index') || 0;

// beforeEach(() => {
//   // Increment the index by 1 after each run
//   currentIndex += 1;
//   Cypress.env('index', currentIndex);

//   // Log the current index for debugging purposes
//   cy.log('Current Index:', currentIndex);
// });



When(/^User Tap on Servicios_Secretariales_V2$/, () => {
	Servicios_v2.Click_On_Servicios_Secretariales_v2_btn();
});




Then(/^tap on ho hay selection button and select Número único de caso NUC$/, () => {
	Servicios_v2.Select_NUC()
});


Then(/^Enter NUC of the case and click on search button$/, () => {
	
	Servicios_v2.Enter_NUC_Buscar()

});


Then(/^User Select Tribunal from Servicios v2$/, () => {
	Servicios_v2.Select_tribunal_Servicios();
});


Then(/^User Select materia from Servicios Secretariales_V2$/, () => {
	Servicios_v2.Select_materia_Servicios();
});

Then(/^User Select Asunto from Servicios$/, () => {
	Servicios_v2.Select_Asunto_Servicios();
});

Then(/^User Select Fetcha de recepcion from servicios$/, () => {
	Servicios_v2.Select_Fetcha();
});

Then(/^User Tap on Search button$/, () => {
	Servicios_v2.click_On_Search();
});

Then(/^Created NUC Should be display and Verify NUC$/, () => {
	Servicios_v2.Verify_NUC();
});

Then(/^User Tap on Tramitar button$/, () => {
	Servicios_v2.Click_On_Tramitar_btn();
});


Then(/^Click on Siguiente button from Tramitar$/, () => {
	Servicios_v2.Clik_On_Siguiente_Tramitar();
});

Then(/^User Tap on represetante edit button$/, () => {
	Servicios_v2.Click_On_representate_edit()
});

Then(/^User Select Preferencia de audiencia and Tipo de identificación$/, () => {
	Servicios_v2.Select_Presencia_and_Identification()
});


Then(/^User tap on Guarder button Parte$/, () => {
	Servicios_v2.Click_On_Guarder_Partes();
});


Then(/^User Should click on Siguiente button from partes tab$/, () => {
    Servicios_v2.CLick_On_Siguente_Button_Partes();

});

Then(/^User click on Finalizer button$/, () => {
	Servicios_v2.Click_On_Finalizar_btn();
});





Then(/^User verify pop up success msg and click on ok button$/, () => {
	Servicios_v2.Verify_Popup_Click_on_OK()
});
