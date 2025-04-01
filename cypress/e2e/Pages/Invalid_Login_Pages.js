

class Invalid_Login{

 microsoft_logo='.logo'
 microsoft_logo='.logo'
 UserName='#i0116'
 next_btn='#idSIButton9'
 Error_Msg='#usernameError'
 Password='[name="passwd"]'
 poder_logo='#bannerLogo'
 Error_Msg2='#passwordError'




 Enter_Invalid_UserName(){

   // cy.get(this.microsoft_logo).should('be.visible')
   cy.get('.logo').should('be.visible')
    //cy.wait(5000);
    cy.get(this.UserName).type("nshah@poderjudicial.gob.") //"nshah@poderjudicial.gob.do"
    //cy.wait(5000)

    //cy.screenshot("UserName");


  }

  Verify_Error_Msg(){

    cy.get(this.Error_Msg).should('be.visible')
    cy.wait(4000)
  }

  Enter_Invalid_Password(){

    cy.get(this.poder_logo).should('be.visible')
    cy.get(this.Password).type("AYtq&RhK3A,4200")   //AYtq&RhK3A,42001




  }
  Verify_Password_Error_Msg(){

    cy.get(this.Error_Msg2).should('be.visible');
    cy.wait(4000)
  }


}
export default new Invalid_Login();
