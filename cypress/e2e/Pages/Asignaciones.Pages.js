class Asignaciones{


   

    click_on_Asignaciones(){

        cy.get('#AsignacionesSalas > .nav-link > .pj-montserrat-medium-16').scrollIntoView().click();

    }
    Select_Tribunal_Asignaciones(){
        cy.get('#select2-cbTribunal-container').click();
        cy.get('#select2-cbTribunal-results').contains("CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL").click();
    }
    Select_NUC_Asignaciones(){
        cy.get('#select2-cbTipoConsulta-container').click();
        //cy.get('.select2-search__field').type("")
        //class="select2-results__options"
        cy.get(".select2-results__options").contains("Número único de caso (NUC)").click();
    }
    Enter_NUC_Click_On_Search(){

       cy.get("#txtBuscarAsignaciones").type("2025-0080725");
      cy.get(':nth-child(4) > :nth-child(4) > .form-group > .input-group > .input-group-append > .btn > .la').click();
    }
}
export default Asignaciones;