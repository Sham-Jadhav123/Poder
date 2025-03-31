

class Casos{
    casos="#sgcCasos"





    Click_On_Casos(){

        cy.get(this.casos).scrollIntoView().click();

    }
    Click_On_Seleccinos(){
        cy.get('div.flex > .dropdown > .btn').click();
        cy.get(".dropdown-menu").contains("Número único de caso (NUC)").should('be.visible').click();
    }
    Click_On_Tribunal(){
        cy.get('#ContendedorBusquedas > .row > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn').click();
       cy.get(".dropdown-menu").contains("CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL").click();
    }
    Select_Sala(){
        cy.get('#ContendedorBusquedas > .row > :nth-child(2) > .inputWrap > .mt-1 > .dropdown > .btn').click();
        cy.get(".dropdown-menu").contains("CUARTA SALA DE LA CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL").click();
    }




}
export default Casos;