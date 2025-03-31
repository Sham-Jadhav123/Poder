class LoginPage {
    visit() {
      cy.origin('https://login.microsoftonline.com/common/login', () => {
        cy.visit('https://sgcdev-release.azurewebsites.net/');
        cy.wait(2000);
      });
      // cy.origin('https://sgcdev-release.azurewebsites.net', () => {
      //   cy.on('uncaught:exception', (e) => {
      //     if (e.message.includes('Cannot read properties of null')) {
      //       return false;
      //     }
      //   });
      //   cy.on('uncaught:exception', (e) => {
      //       if (e.message.includes('Cannot read properties of undefined') && e.message.includes('focus')) {
      //         return false;
      //       }
      //       return true;
      //     });
      //   });
      cy.origin('https://sgcdev-release.azurewebsites.net', () => {
        // Handle uncaught exceptions
        cy.on('uncaught:exception', (e) => {
          // Suppress "Cannot read properties of null" error
          if (e.message.includes('Cannot read properties of null')) {
            return false;  // Suppress this error
          }
      
          // Suppress "Cannot read properties of undefined" with focus
          if (e.message.includes('Cannot read properties of undefined') && e.message.includes('focus')) {
            console.log('Caught and suppressed focus-related error:', e.message);
            return false;  // Suppress this error and let the test continue
          }
          if (e.message.includes('backend:request failed to receive a response from the primary Cypress spec bridge')) {
            console.log('Caught and suppressed backend request error:', e.message);
            return false;  // Suppress the error and continue the test
          }
      
          
          return true;
        });
      
        // Perform other actions like visiting the page or interacting with the site
        cy.visit('https://sgcdev-release.azurewebsites.net/');
      
        // Your additional test steps here
      });
      
    }

    // enterUsername(username) {   for fixture datadriven
    //   cy.get('#i0116').type(username);
    //   cy.screenshot('Username');
    // }

    //login with valid username and password
    enterUsername()
    {
      cy.get('#i0116').type("nshah@poderjudicial.gob.do");
      cy.screenshot('Username');
    }
    submitUsername() {
      cy.get('#idSIButton9').click();
      cy.wait(2000);
      cy.screenshot('submitbtn')
    }
    enterPassword()
    {
      cy.get('#i0118').type("AYtq&RhK3A,42001");
      cy.screenshot();
    }
    submitPassword() {
      cy.wait(4000)
      cy.get('#idSIButton9',{timeout:10000}).click();
      cy.wait(2000)
      cy.get('#idSIButton9').click();
      cy.wait(4000)
      cy.get('#idSIButton9').click();
      cy.wait(4000);
    }
  
  
    // enterPassword(password) {
    //   cy.get('#i0118').type(password);  for fixture datadriven
    //   cy.screenshot('Password');
    // }
    //User login with invalid username and password
    enterInvalidUsername()
    {
      cy.get('#i0116').type("siddhaMust@hcd");
      cy.screenshot('Username');
    }
    enterInvalidPassword()
    {
      cy.get('#i0118').type("AYtq&RhKBhai,420");
      cy.get('#idSIButton9').click();
      cy.get('#idSIButton9').click(); 
      cy.get('#passwordError').should('include.text','Please enter your password.');
      // cy.screenshot();
    }

    //user login with Empty username and password
    emptyUsername()
    {
      cy.get('#i0116').type("      ");
      // cy.screenshot('Username');
    }
    emptyPassword()
    {
      cy.get('#i0118').type("   ");
      cy.get('#idSIButton9').click();
      cy.wait(5000)

    }
  
    //welcome page verification
    verifyWelcomeMessage() {
      cy.wait(4000)
      // cy.origin('https://sgcdev-release.azurewebsites.net/', () => {  //before it is needed now it is not require
        cy.get('.pj-textoBienvenida.h3.text-center').should('include.text', '¡Le damos la bienvenida!');
        cy.screenshot('WelcomePage')
      // });
      cy.wait(3000);
      
    }
    
  }
  export default new LoginPage();
  