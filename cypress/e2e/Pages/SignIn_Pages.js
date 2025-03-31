
class SignIn{

    microsoft_logo='.logo'
    UserName='#i0116'
    next_btn='#idSIButton9'
    poder_logo='#bannerLogo'
    Password='[name="passwd"]'
    Signin_btn='#idSIButton9'
    Title='.text-title'
    yes_option='#idSIButton9'


    Launch(){


         cy.origin('https://login.microsoftonline.com/',()=>{
      //cy.visit('https://sgcdev-s2.azurewebsites.net/')
     cy.visit("https://sgcdev-release.azurewebsites.net/")
      cy.wait(7000)


  
      })
      cy.origin('https://sgcdev-release.azurewebsites.net', () => {
            cy.on('uncaught:exception', (e) => {
              if (e.message.includes('Cannot read properties of null')) {
                return false;
              }
            });
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Cannot read properties of undefined') && e.message.includes('focus')) {
                  return false;
                }
                return true;
              });
            cy.visit('https://sgcdev-release.azurewebsites.net/');
          });
  }


  Enter_Username(UName){
    cy.get(this.microsoft_logo).should('be.visible')
    cy.wait(5000);
    cy.get(this.UserName).type(UName) //"nshah@poderjudicial.gob.do"
    //cy.wait(7000)

  }
  Click_On_Next(){
    cy.get(this.next_btn).should('be.visible');
    cy.get(this.next_btn).click();
    //cy.wait(9000)
  }
  Enter_Password(UPWD){
    // verify Poder Logo
    //cy.get(this.poder_logo).should('be.visible');
    cy.get(this.Password).type(UPWD)   //"AYtq&RhK3A,42001"
    //cy.wait(8000)

  }
  Click_On_SignIn_Btn(){
    // click on signIn button
    cy.get(this.Signin_btn).click();
    //cy.wait(8000);

  }

  Select_Option(){
    // verify Title
    cy.get(this.Title).should('be.visible');
    //cy.wait()
    // select Yes option
    cy.get(this.yes_option).click();
    cy.wait(9000);
    cy.get(this.yes_option).click();
    cy.wait(9000)
     cy.viewport(1920, 1080); 
     //cy.viewport(1280, 720); 
     // verify Dashboard
     cy.get('.pj-textoBienvenida').should('be.visible');
    cy.wait(15000)


  }

  Enter_Invalid_UserName(){

    cy.get(this.microsoft_logo).should('be.visible')
    //cy.wait(5000);
    cy.get(this.UserName).type("nshah@poderjudicial.gob.") //"nshah@poderjudicial.gob.do"
    //cy.wait(5000)
    cy.get(this.poder_logo).should('be.visible');
    cy.screenshot("UserName");


  }

}
export default new SignIn();