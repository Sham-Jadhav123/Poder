import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
//import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import Presencial from "../Pages/Presencial_Pages";

const presencial=new Presencial();

// before(() => {
// //   loginPage.visit(); // Visit login page
// //   loginPage.login('testuser', 'password123'); // Use valid test credentials
// 	cy.login("nshah@poderjudicial.gob.do","AYtq&RhK3A,42001")
// });
   

When(/^User tap on Presencial button$/, () => {
	presencial.Click_On_Presencial();
});

Then(/^Select Civil Tribunal$/, () => {
	presencial.Select_Tribunal();
});

Then(/^Select tipo de identification$/, () => {
	presencial.Select_Identification();
});

Then(/^Enter Identification code$/, () => {
	presencial.Enter_Identification();
});

Then(/^Select expediente nuevo option$/, () => {
	presencial.Select_Expedente();
});

Then(/^Select sede from option$/, () => {
	presencial.Select_Sede();
});

Then(/^User Select Materia$/, () => {
	presencial.Select_Matria();
});

Then(/^USer select tribunal option$/, () => {
	presencial.Select_Tribunal_option()

});

Then(/^User Select Tipo de procedimiento$/, () => {
	presencial.Select_Procedemiente();
});

Then(/^User Select asunto option$/, () => {
	presencial.Select_Asunto()
});

Then(/^Enter objeto and clik on Siguiente$/, () => {
	presencial.Enter_Objeto()
});



When(/^User tap on add parties button$/, () => {
	presencial.Click_On_Add_partes()
});

Then(/^User Select Tipo de involucramiento option$/, () => {
	presencial.Select_TipoInvolucramiento_option()
});

Then(/^User Select Preferencia de audiencia options from dropdown$/, () => {
	presencial.Select_Preferencia()
});

Then(/^Select tipo de identification from partes tab$/, () => {
	presencial.Select_Tipo_Identification_Parte()
});

Then(/^Enter Identification from partes tab$/, () => {
	presencial.Enter_Partes_Identification();
});

Then(/^User click on Guarder button$/, () => {
  presencial.Click_On_guarder_btn();
});

Then(/^User Select Calidad$/, () => {
presencial.Select_Calidad()
});



Then(/^Enter Identification for demandando$/, () => {
	presencial.Enter_Partes_Identification_demandando()
});

Then(/^User Select calidad option for demandando$/, () => {
	presencial.Select_Calidad_demandado()
});

Then(/^User Select Desea recibir notificaciones electrónicas No option$/, () => {
	presencial.Select_Electronicasas()
});

Then(/^User Select Direcciones disponibles$/, () => {
	presencial.Select_Desponibles()
});


Then(/^User Select Tipo de involucramiento option for representate$/, () => {
	presencial.Select_Tipo_Identification_Parte_representatnte()
});

Then(/^User Select Vincular Partes$/, () => {
	presencial.Select_Vincular_Partes()
});


Then(/^Enter Identification for Representate$/, () => {
	presencial.Enter_Partes_Identification_Representate()
});

Then(/^Select calidad for Representate$/, () => {
	presencial.Select_Calidad_representate()
});

Then(/^User click on Siguiente button$/, () => {
	presencial.Click_On_Siguente_btn()
});




When(/^User click on agregar button$/, () => {
	presencial.Click_On_Agregar_Btn()
});

Then(/^User select Fecha de documento$/, () => {
	presencial.Select_fecha_de_documento()
});

Then(/^User Select Tipo de documento$/, () => {
	presencial.Select_Tipo_De_Documento()
});

Then(/^User Select Seleccione el documento$/, () => {
	presencial.Select_Seleccione_el_documento()
});

Then(/^User Enter Cantidad de páginas$/, () => {
	presencial.Select_Cantidad_de_paginas()
});

Then(/^User Enter Nombre del documento$/, () => {
	presencial.Enter_NombreDocumento()
});

Then(/^User Select Condición del documento$/, () => {
	presencial.Select_Condición_del_documento()
});

Then(/^click on guarder button on documento$/, () => {
	presencial.Click_On_Guarder_btn_documento()
});

Then(/^Verify NUC and click on guarder button$/, () => {
	presencial.verify_NUC_CLick_On_Guarder()
});
Then(/^Verify POP up message$/, () => {
	presencial.Verify_Pop_Up_Msg();

});

Then(/^Store NUC$/, () => {
	presencial.storeNUC();
});

Then(/^Retrive NUC$/, () => {
	presencial.NUC()
	//presencial.retrieveNUC()
});

Then(/^user tap on OK button$/, () => {
	presencial.Click_ON_OK()
});
