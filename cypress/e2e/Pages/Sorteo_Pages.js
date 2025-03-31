

class Sorteo{

    sorteo_btn=".pj-montserrat-medium-16 text-item"
   ASIGNACIONES =".col-md-12 card-title"
   Asuntos="#btnAsuntoUrgente"
   Tribunal="#select2-cbTribunal-container"



   Click_On_Sorteo_btn(){

    //cy.get(this.sorteo_btn).scrollIntoView().click();
    cy.get('#Sorteo > .nav-link').scrollIntoView().click();
    
   }
   Verify_Asignaciones_page(){

   // cy.get(this.ASIGNACIONES).should('be.visible');
   cy.get('#tabSorteoSalas > .card > .card-header > .row > .col-md-12').should('be.visible');

   }
   verify_Asuntos_Tab(){
    cy.get(this.Asuntos)
  .should('be.visible')
  .should('not.be.disabled')
  .click();
   }
   verify_tribunal_dropdown(){

    cy.get(this.Tribunal)
  .should('be.visible')
  .should('not.be.disabled')
  
   }
Select_Sorteo_Tribunal(){
    cy.get('#select2-cbTribunal-container')
  .click({ force: true });
   cy.get('.swal2-confirm').click({ force: true });
    cy.get('#select2-cbTribunal-container')
  .click({ force: true });
   cy.get('.select2-search__field').click({ force: true }).type('{downarrow}').type('{downarrow}').type('{downarrow}');
   cy.get('li.select2-results__option')
  .contains('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL')
  .click();
   
}

click_On_Tados_Tab(){
    cy.get("#btnTodos").click();

}
Select_Materia(){
    cy.get("#select2-cbMateria-container").click();
    cy.get(".select2-dropdown").contains("CIVIL").click();
}
Select_NUC_Option(){
    //cy.get("#cbTipoConsulta").click();
    cy.get('#cbTipoConsulta')  // Get the select element
  .select('Número único de caso (NUC)');  // Select the option by its value or text content


}
    Enter_NUC_And_Click_on_Search(){

        cy.get("#txtBuscarExpediente").type("2025-0080725");
        cy.get(':nth-child(2) > .row > :nth-child(3) > .form-group > .input-group > .input-group-append > .btn').click();
    }
    Verify_Case_Details(){

        cy.get('#txtBuscarExpediente').invoke('val').then((text1) => {
      // Print the first text to the Cypress log and console
      cy.log('Text from #txtBuscarExpediente:', text1); // Display in the Cypress log
      console.log('Text from #txtBuscarExpediente:', text1); // Print to the browser console

      // Get the text of the second field (.odd > :nth-child(2))
      cy.get('.odd > :nth-child(2)').invoke('text').then((text2) => {
        // Print the second text to the Cypress log and console
        cy.log('Text from .odd > :nth-child(2):', text2); // Display in the Cypress log
        console.log('Text from .odd > :nth-child(2):', text2); // Print to the browser console

        // Assert that both texts are the same
        expect(text1.trim()).to.equal(text2.trim()); // Use trim() to remove any extra spaces or line breaks
      });
    });
    }

    Select_ChekBox(){

        cy.get('td.select-checkbox.sorting_1').click();
    }
    Click_On_Sorteo_altero(){
        cy.get(':nth-child(3) > [align="right"] > table > tbody > tr > :nth-child(1) > .form-group > .btn').click();
    }
    Verify_Judge_Field(){
    cy.get('#txtJuezSorteo')
  .invoke('val')  // Get the value of the input field
  .should('not.be.empty'); 
    }
    Click_On_Sortear_Btn(){
        cy.get('#mdlSorteoAleatorio > .modal-dialog > .modal-content > :nth-child(3) > .modal-footer > [align="right"] > .btn').scrollIntoView().click();
cy.get('.swal2-confirm').click();
    }
}
export default Sorteo;