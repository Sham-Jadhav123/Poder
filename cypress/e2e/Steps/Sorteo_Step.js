import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import Sorteo from "../Pages/Sorteo_Pages";

const sorteo = new Sorteo()

// When(/^User tap on Sorteo button$/, () => {
// 	Sorteo.Click_On_Sorteo_btn()
// });

When(/^User tap on Sorteo button$/, () => {
	sorteo.Click_On_Sorteo_btn();
});


Then(/^Verify ASIGNACIONES DE SALA page$/, () => {
    sorteo.Verify_Asignaciones_page()
	
});

Then(/^Verify Asuntos Urgentes tab selected and active$/, () => {
	sorteo.verify_Asuntos_Tab()
});

Then(/^Verify Tribunal dropdown is visible and interactable$/, () => {
	sorteo.verify_tribunal_dropdown()
});

Then(/^Retrive the tribunal previsouly selected in the presencial moudle and select tribunal$/, () => {
	sorteo.Select_Sorteo_Tribunal()
});



Then(/^User Nevigate to Todos tab$/, () => {
	sorteo.click_On_Tados_Tab()
});

Then(/^User Select Civil from materia dropdown$/, () => {
    sorteo.Select_Materia()
	
});

Then(/^Select NUC from criterio$/, () => {
	sorteo.Select_NUC_Option()
});

Then(/^Enter NUC and click on search$/, () => {
	sorteo.Enter_NUC_And_Click_on_Search()
});

Then(/^Verify Case Details$/, () => {
	sorteo.Verify_Case_Details();
});


Then(/^User Select Case CheckBox$/, () => {
	sorteo.Select_ChekBox()
});

Then(/^User Tap on Altero button$/, () => {
	sorteo.Click_On_Sorteo_altero()
});

Then(/^User is verify Judge is display or not$/, () => {
	sorteo.Verify_Judge_Field()
});

Then(/^User Tap on sortear button$/, () => {
	sorteo.Click_On_Sortear_Btn()
});
