import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import Asignaciones from "../Pages/Asignaciones.Pages";
const asignaciones=new Asignaciones();


When(/^User Tap On Asignaciones$/, () => {
	asignaciones.click_on_Asignaciones()
});

Then(/^User Select Tribunal From Asignaciones page$/, () => {
	asignaciones.Select_Tribunal_Asignaciones();
});

Then(/^User Select Nuc from asignaciones page$/, () => {
	asignaciones.Select_NUC_Asignaciones();
});


Then(/^User Enter NUC And click on search button of Asignaciones$/, () => {
	asignaciones.Enter_NUC_Click_On_Search()
});
