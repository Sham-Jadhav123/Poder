class HomePage
{
    ClickOnMenu()
    {
        cy.wait(2000);
        cy.get('#btn-collapse-sidebar > .bi').click();
    }
    VerifyUser()
    {
        cy.get('.username > .pj-montserrat-semibold-18').should('include.text','Nikhil Shah')
    }
}
export default new HomePage;