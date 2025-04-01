


///<reference types="cypress"/>
import 'cypress-xpath'


class Servicios_Secretariales_v2{
 Servicios_Secretariales_v2_btn="#ServiciosSecretarialesV2 > .nav-link > .pj-montserrat-medium-16"
Servicios_Title=".text-2xl"
ho_hay='div.flex > .dropdown > .btn'

buscar="#txtCriteroBusqueda"
buscar_search="#btnCriteroBusqueda"


//Tribunal_Servicios=(':nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn')



"cy.get('div.flex > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')"




    Click_On_Servicios_Secretariales_v2_btn(){

        //cy.get(this.Servicios_Secretariales_v2_btn).scrollIntoView();
        cy.get('#ServiciosSecretarialesV2 > .nav-link > .pj-montserrat-medium-16').scrollIntoView();
        cy.wait(5000);
         cy.get(this.Servicios_Secretariales_v2_btn).should('be.visible');
         cy.get(this.Servicios_Secretariales_v2_btn).click();
        
       
       

    }

    Select_NUC(){
        cy.get(this.Servicios_Title).should('be.visible');

        cy.get('div.flex > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click();
      // cy.get('div.flex > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("Número único de caso (NUC)").type('{enter}');
      //   cy.get(this.ho_hay).click();
      //    cy.get('.select2-dropdown').scrollIntoView().contains("Número único de caso (NUC)").click();
        cy.wait(5000)
    }

   
    Enter_NUC_Buscar(){

    

       const nuc = Cypress.env('nuc'); 
    cy.log('Retrieved NUC:', nuc); 

     cy.get(this.buscar)
      .type(nuc)  // Type the NUC into the text field
      .should('have.value', nuc); 
    //    //cy.get(this.buscar).type("2025-0080477");

        cy.wait(5000);
        //cy.get(this.buscar_search).click();
    }

    Select_tribunal_Servicios(){

        cy.get(':nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn').click();
        cy.wait(5000)


        // cy.get(':nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL")
        
        
        
      cy.get(':nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL")

       
       
       
       
        
       //cy.xpath("//span[text()='CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL']").click();

       cy.xpath("//span[text()='CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL']").click();
        cy.wait(6000)
    }

    Select_materia_Servicios(){

        cy.get(':nth-child(2) > .inputWrap > .mt-1 > .dropdown > .btn').click();
        cy.wait(5000)
        cy.xpath("//span[text()='CIVIL']").click();
        cy.wait(6000)


    }


    Select_Asunto_Servicios(){
        cy.get(':nth-child(5) > .inputWrap > .mt-1 > .dropdown > .btn').click();
        cy.wait(5000)
        cy.get(':nth-child(5) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("DEMANDA CIVIL");
        cy.wait(5000);
        cy.xpath("//span[text()='DEMANDA CIVIL']").click();
        cy.wait(5000)
    }

    Select_Fetcha(){

        cy.get('.txtFechaRecepcion__wrapper').click();
        cy.wait(5000);
        
cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').first().dblclick();
  cy.wait(5000)

    }

    click_On_Search(){

        cy.get("#btnCriteroBusqueda").click();
        cy.wait(5000)

    }

    Verify_NUC(){

   
cy.get('[data-index="0"] > :nth-child(2) > .flex > .font-medium > :nth-child(4)').scrollIntoView();
cy.wait(5000)
 cy.get('[data-index="0"] > :nth-child(2) > .flex > .font-medium > :nth-child(4)')
      .invoke('text')  // Get the text of the element
      .then((text) => {
        cy.log('NUC Is:', text);  // Print the text to the Cypress log
      });
   // }




// cy.get(`[data-index="${index}"] > :nth-child(2) > .flex > .font-medium > :nth-child(4)`)


 
//       .scrollIntoView()  // Scroll to the element
//       .wait(5000)        // Wait for the element to load (optional, can be improved)
//       .invoke('text')    // Get the text of the element
//       .then((text) => {
//         cy.log('NUC Is:', text);  // Log the text of the element to the Cypress log
//       });

// cy.get(`[data-index="${index}"] > :nth-child(2) > .flex > .font-medium > :nth-child(4)`).scrollIntoView();
// cy.get(`[data-index="${index}"] > :nth-child(2) > .flex > .font-medium > :nth-child(4)`).invoke('text');


  }
    Click_On_Tramitar_btn(){

  
cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
         win.location.href = url;
        });
    });
cy.wait(9000)

cy.get(`[data-index="0"] > .self-center > .btnTramitar`).click();

//  cy.on('uncaught:exception', (e) => {
//                 if (e.message.includes('Cannot read properties of undefined') && e.message.includes('focus')) {
//                   return false;
//                 }
//                 return true;
//               });

  
// cy.get(`[data-index="0"] > .self-center > .btnTramitar`)
//   .invoke('removeAttr', 'target')  
//   .then(($btn) => {
    
//     const onclickAttribute = $btn.attr('onclick');
    
//     if (onclickAttribute) {
     
//       const dynamicPart = onclickAttribute.match(/'([^']+)'/)[1];  

      
//       cy.log('Dynamic Part:', dynamicPart);

//       // Example of base URL
//      // const baseUrl = "https://sgcdev-s2.azurewebsites.net/ServiciosSecretarialesV2/Tramitar/";

//       const baseUrl = "https://sgcdev-release.azurewebsites.net/ServiciosSecretarialesV2/Tramitar/";
//       const dynamicUrl = `${baseUrl}${dynamicPart}`;

      
//       cy.log('Navigating to:', dynamicUrl);

      
//       cy.window().then((win) => {
        
//         win.location.href = dynamicUrl;

        
//         cy.wait(5000);  
//       });
//     } else {
//       cy.log('No onclick attribute found');
//     }
 // });





  
  
  //cy.get('[data-index="1"] > .self-center > .btnTramitar').click();





    }

Clik_On_Siguiente_Tramitar(){



// select tribunal

// cy.get('button[title="CORTE DE APELACION Y EQUIVALENTES"]').click();
//  cy.get('.dropdown-menu.show')
//       .find('a')
//       .contains('PRIMERA INSTANCIA Y EQUIVALENTES')
//       .click();
//       cy.wait(6000)

cy.wait(12000)

    cy.get('#progress-next').click();
    cy.wait(5000)
    cy.get('#TKNt2').should('be.visible');
}

Click_On_representate_edit(){

    //cy.get('#tblRegistrosPartes > .fmba-pages > .fmba-page-item > [data-index="0"] > .w-\[40\%\] > .border-2').click();
//   cy.get('button.border-2.border-[#0050DD].text-[#0050DD].hover:text-white.hover:bg-[#0050DD].rounded-lg.self-center').click();

 //cy.get('button[onclick="cargarModalEditarRepresentante(1072097)"]').click();
cy.get('button i.d-icon.d-file-edit')
  .eq(0)  // Select the first element in the list
  .click();


}
Select_Presencia_and_Identification(){
    cy.get('.bodyRegistroparte > :nth-child(1) > :nth-child(3) > .inputWrap > .mt-1 > .dropdown > .btn').click();

    cy.get(".dropdown-menu").contains("Virtual").click();
   //cy.xpath("//span[text()='Virtual']").first().click();
    cy.wait(5000)
    cy.get('.bodyInformacionGeneral > :nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn').click();
     cy.get(".dropdown-menu").contains("Física").click();
     cy.wait(5000)
}


Click_On_Guarder_Partes(){

    cy.get("#mrpBtnGuardarParte").click();
    cy.wait(5000)
}

CLick_On_Siguente_Button_Partes(){
cy.get('#progress-next').click();
cy.wait(5000)
cy.get("#ISNt5").should('be.visible');
cy.wait(5000)

}
Click_On_Finalizar_btn(){
cy.get('#BtnFinalizar').scrollIntoView().click();
cy.wait(5000)
}
Verify_Popup_Click_on_OK(){

     cy.get('#swal2-title').then(($element) => {
      const elementText = $element.text();
      
      
      cy.log('Element Text:', elementText);
      
      
      expect(elementText).to.equal('Datos Guardados'); 
    });
// click on ok
cy.get('.swal2-confirm').click();


}

}
export default Servicios_Secretariales_v2;