import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

import Casos from "../Pages/Casos_V2_Pages";

const casos=new Casos();


When(/^User tap on Casos V2 module$/, () => {
	casos.Click_On_Casos();
});

Then(/^User Tap On Seleccioner menu and select NUC$/, () => {
	casos.Click_On_Seleccinos()
});


Then(/^User Select Tribunal from casos v2$/, () => {
    casos.Click_On_Tribunal()
	
});

Then(/^User Select Sala from Casos V2$/, () => {
	casos.Select_Sala();
});

