class LoginPage {

    get email() { return cy.get('[name="loginfmt"]') }
    get password() { return cy.get('[name="passwd"]') }
    get yesB() { return cy.get('#idSIButton9') }

    originPage() {
        cy.origin('https://login.microsoftonline.com/', () => {
            cy.visit('https://sgcdev-release.azurewebsites.net/')
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
    titleHome(){
        cy.xpath('//p[text()="¡Le damos la bienvenida!"]').should('be.visible')
    }
    enterEmail(data) {
        this.email.type(data)
    }
    enterPassword(data) {
        this.password.type(data)
    }
    yesButton() {
        this.yesB.click()
    }
    async loginPoder(){
        cy.fixture
    }
}
export default new LoginPage();