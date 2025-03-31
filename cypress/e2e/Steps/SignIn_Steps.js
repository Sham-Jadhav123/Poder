import{Given,When, Then} from 'cypress-cucumber-preprocessor/steps';
//import SignIn from '../Pages/SignIn_Pages'
import SignIn from '../Pages/SignIn_Pages'

//const Signin=new SignIn();


Given(/^Launch the URL$/, () => {
	SignIn.Launch();
});


When(/^Enter Username$/, () => {
	SignIn.Enter_Username("nshah@poderjudicial.gob.do");
});

When(/^Tap on Next button$/, () => {
	SignIn.Click_On_Next();
});

When(/^Enter password of user$/, () => {
	SignIn.Enter_Password("AYtq&RhK3A,42001")
});

When(/^Tap on SignIn button$/, () => {
	SignIn.Click_On_SignIn_Btn();
});

Then(/^User select Yes Option$/, () => {
    SignIn.Select_Option();
});



Given(/^User SignIn into poder application using valid creadentials$/, () => {
	cy.login("nshah@poderjudicial.gob.do","AYtq&RhK3A,42001")
});


// before(() => {
//   loginPage.visit(); // Visit login page
//   loginPage.login('testuser', 'password123'); // Use valid test credentials
// });


When(/^Enter Invalid  Username$/, () => {
	SignIn.Enter_Invalid_UserName()
});
