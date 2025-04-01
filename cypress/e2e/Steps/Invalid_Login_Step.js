import{Given,When, Then} from 'cypress-cucumber-preprocessor/steps';

import Invalid_Login from '../Pages/Invalid_Login_Pages';


When(/^Enter Invalid  Username$/, async() => {
    Invalid_Login.Enter_Invalid_UserName();
	
});


Then(/^Verify Error Message$/, async() => {
	Invalid_Login.Verify_Error_Msg()
});



When(/^Enter Invalid password of user$/, async() => {
	Invalid_Login.Enter_Invalid_Password();
});

Then(/^Verify invalid password error msg$/, () => {
	Invalid_Login.Verify_Password_Error_Msg();
});
