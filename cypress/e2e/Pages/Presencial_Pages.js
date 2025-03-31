
///<reference types="cypress"/>
import 'cypress-xpath'
class Presencial{

    Presencial_btn="#Presencial > .nav-link"
    Tribunal=".labelSeleccionTribunal"
    select_tribunal="#select2-tribunal-container"
    civil=".select2-search__field"
    tribunal_option="#row bloqueTribunal"
    continuar_btn="#btnContinuar"
    Recepcion_tab="#tabRecepcion"
    arrow="#select2-rTipoIdentificacion-container"
    cedula=".select2-results__options"
    identification="#rIdentificacion"
    nuevo="#select2-rEsNuevo-container"
    sede="#select2-rSede-container"
    materia="#select2-rMateria-container"
    tribunal="#select2-rTribunal-container"
    procedemiente="#select2-rTipoProcedimiento-container"
    asunto="#select2-rAsunto-container"
    objeto="#rObjeto"
    siguente_btn="#btnSiguiente"

    partes="#tabPartes"
    add_partes=".btn addPerson"
    lblpartes="#partesModalLabel"
  TipoInvolucramiento="#select2-pTipoInvolucramiento-container"
  Preferencia ="#select2-pPreferenciaAudiencia-container"
  tipo_de_Identification="#select2-pTipoIdentificacion-container"
  pidentification="#pIdentificacion"
  psearch="#pBtnBuscaPersona"
  calidad="#select2-pCalidad-container"
  guarder_btn="#btnGuardarParte"    
  electronicas="#select2-pRecibirNotificaciones-container"
  desponibles="#select2-pDireccionDisponible-container"
  vincular="#divRepresentadosPresencial > :nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search"
  Siguiente_btn="#btnSiguiente"
  document="#tabDocumentos"
  agregar_btn="#dAgregar"
  documento_title="#documentoModalLabel"
  fecha_de="#dFechaRecepcion"
  tipo_documento="#select2-dTipoDocumento-container"
  choose_file="#dDocumento"
  pagina="#dCantidadPagina"
  nomber_documento="#dNombreDocumento"
 CondicionDocumento ="#select2-dCondicionDocumento-container"
 guarder_documento="#btnGuardarDocumento"







    Click_On_Presencial(){
        cy.get(this.Presencial_btn).scrollIntoView();
        cy.wait(9000)
        cy.get(this.Presencial_btn).should('be.visible');
       // cy.wait(6000)
        cy.get(this.Presencial_btn).click();
    }
    Select_Tribunal(){

        cy.get(this.Tribunal).should('be.visible')
        cy.get(this.select_tribunal).click();
        // cy.wait(6000)
        //cy.get('.select2-dropdown').type('{downarrow}').type('{downarrow}').type('{enter}');
    
         //cy.get('.select2-dropdown').contains("CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL").click();
       /////////////////
      cy.get('.select2-dropdown').contains("CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL").click();

         //   cy.wait(6000)
           //cy.get(".select2-selection select2-selection--single").click();
           //cy.get('#select2-sala-container').click();
          // cy.get('.select2-dropdown').contains("PRESIDENCIA DE LA CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL").click();
        //    cy.wait(6000)
          cy.get(this.continuar_btn).click();
          cy.wait(6000)

          // PRIMERA INSTANCIA Y EQUIVALENTES

    }
    Select_Identification(){

        cy.get(this.Recepcion_tab).should('be.visible');
        // cy.wait(5000)
        cy.get(this.arrow).click();
         
        cy.get('.select2-dropdown').contains("Cédula").click();
      // cy.get('.select2-dropdown').type('{downarrow}').type('{enter}');
      // //cy.document().its('readyState').should('eq', 'complete');
        //cy.wait(20000);
        // cy.wait(6000)


    }
    Enter_Identification(){
        cy.get(this.identification).should('be.visible');
        cy.get(this.identification).type("11111111111");
        // cy.wait(6000)
        // click on search button
        cy.get('#rBtnBuscaPersona').click();
        cy.wait(7000)
    }
    Select_Expedente(){
        cy.get(this.nuevo).click();
        // cy.wait(6000)
         cy.get('.select2-dropdown').contains("Si").click();
    }

    // Select_Sede(){
    //     cy.get(this.sede).click();
    //     cy.wait(6000)
    //      cy.get('.select2-dropdown').contains("EDIFICIO JUZGADO DE PAZ DE LA 1ERA.CIRCUNSCRIPCION").scrollIntoView().click();
    //     //EDIFICIO JUZGADO DE PAZ DE LA 1ERA.CIRCUNSCRIPCION
    // }
    Select_Matria(){

        cy.get(this.materia).click();
         cy.get('.select2-dropdown').contains("CIVIL").click();
        //  cy.wait(6000)

    }

    Select_Tribunal_option(){
        cy.get(this.tribunal).click();
        cy.wait(6000)
        //cy.get('.select2-dropdown').contains("CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL").click();
        // cy.wait(6000)
       
      cy.get('.select2-dropdown').contains("CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DEL DISTRITO NACIONAL").click();


    }
    Select_Procedemiente(){

        cy.get(this.procedemiente).click();
        cy.wait(6000)
        cy.get('.select2-dropdown').contains("CONTENCIOSO").click();
        // cy.wait(6000)
    }
    Select_Asunto(){
        cy.get(this.asunto).click();
        cy.wait(6000);
        //cy.get(".select2-search__field").type("ACUSACION DE ACCION PRIVADA");
        cy.get('.select2-dropdown').scrollIntoView().contains("DEMANDA CIVIL").click();
        // cy.wait(6000)

    }
    Enter_Objeto(){
        cy.get(this.objeto).type("Prueba")
        // cy.wait(6000)

        // click on Siguente button
        cy.get(this.siguente_btn).click();
        // cy.wait(6000)


//cy.get('#tabPartes')

    }

    Click_On_Add_partes(){
        cy.get(this.partes).should('be.visible');
        // cy.wait(6000);
        //cy.get(this.add_partes).click();
        cy.get('#pAgregar > .addPerson').click();
        // cy.get(6000)
    }

    Select_TipoInvolucramiento_option(){

        cy.get(this.lblpartes).should('be.visible');
        // cy.wait(6000)
        cy.get(this.TipoInvolucramiento).click();
        cy.get(".select2-dropdown").contains("Parte").click();
        // cy.wait(6000)
    }
    Select_Preferencia(){
        cy.get(this.Preferencia).click();
        // cy.wait(6000)
        cy.get(".select2-dropdown").contains("Presencial").click();
        // cy.wait(6000)
    }
Select_Tipo_Identification_Parte(){

    cy.get(this.tipo_de_Identification).click();
    // cy.wait(6000)
    cy.get('.select2-dropdown').contains("Cédula").click();
    // cy.wait(6000)

}
Enter_Partes_Identification(){

    cy.get(this.pidentification).type("00000000000")
    // cy.wait(6000)
    cy.get(this.psearch).click();
    // cy.wait(6000)

}
Select_Calidad(){

    cy.get(this.calidad).click();
    // cy.wait(6000)
     cy.get('.select2-dropdown').contains("Demandante").click();
}
Click_On_guarder_btn(){
    cy.get(this.guarder_btn).should('be.visible');
    cy.get(this.guarder_btn).click();
    // cy.wait(6000)
}
Enter_Partes_Identification_demandando(){

    cy.get(this.pidentification).type("11111111111")
    // cy.wait(6000)
    cy.get(this.psearch).click();
    // cy.wait(6000)

}
Select_Calidad_demandado(){

    cy.get(this.calidad).click();
    // cy.wait(6000)
     cy.get('.select2-dropdown').contains("Demandado").click();
     
}
Select_Electronicasas(){
    cy.get(this.electronicas).click();
    cy.wait(6000)
     cy.get('.select2-dropdown').contains("No").click();
   
}
Select_Desponibles(){
    cy.get(this.desponibles).click();
    // cy.wait(6000)
    cy.get('.select2-dropdown').contains("Trinitaria #18 San Juan, República Dominicana").click();
     cy.wait(6000)
}


Select_Tipo_Identification_Parte_representatnte(){

   cy.get(this.lblpartes).should('be.visible');
         cy.wait(6000)
        cy.get(this.TipoInvolucramiento).click();
        
        cy.wait(6000)
    cy.get('.select2-dropdown').contains("Representante").click();
     cy.wait(6000)

    // check
    // cy.get(".select2-selection select2-selection--multiple").click();
    // cy.wait(8000)

}
Select_Vincular_Partes(){
    cy.get(this.vincular).click();
    // cy.wait(6000)
    cy.get('.select2-dropdown').contains("Aman Baviskar").click();
    // cy.wait(6000)

}
Enter_Partes_Identification_Representate(){

    cy.get(this.pidentification).type("77777777777")
    // cy.wait(6000)
    cy.get(this.psearch).click();
     cy.wait(6000)

}
Select_Calidad_representate(){

    cy.get(this.calidad).click();
    // cy.wait(6000)
     cy.get('.select2-dropdown').contains("Abogado").click();
     
}

Click_On_Siguente_btn(){
    cy.get(this.siguente_btn).should('be.visible');
    // cy.wait(6000)
    cy.get(this.Siguiente_btn).click();
}
Click_On_Agregar_Btn(){
    cy.get(this.document).should('be.visible');
    // cy.wait(6000)
    cy.get(this.agregar_btn).click();
    // cy.wait(6000);
    cy.get(this.documento_title).should('be.visible')
    // cy.wait(6000)
}
Select_fecha_de_documento(){
    cy.get(this.fecha_de).click();
    // current date
    cy.get('.today > div').click();
   
   
}
Select_Tipo_De_Documento(){
    cy.get(this.tipo_documento).click();
    // cy.wait(6000);
     cy.get('.select2-dropdown').contains("Acto de Emplazamiento").click();
}

Select_Seleccione_el_documento(){
    cy.get(this.choose_file).selectFile("cypress/fixtures/Poder Judicial Document 3.pdf")
  // cy.get('#dDocumento').click({ force: true });
    // cy.wait(6000)
}

Select_Cantidad_de_paginas(){
    cy.get(this.pagina).click();
    // cy.wait(6000)
}
Enter_NombreDocumento(){
    cy.get(this.nomber_documento).type("Acto de Emplazamiento")
    // cy.wait(6000)
}
Select_Condición_del_documento(){
    cy.get(this.CondicionDocumento).click();
    // cy.wait(6000)
    cy.get('.select2-dropdown').contains("Original").click();
    // 
    cy.get('#select2-dTipoCalidad-container').click();
    // cy.wait(6000)
     cy.get('.select2-dropdown').contains("Demandante").click();
     //cy.wait(6000)
     //
     cy.get('#bloqueDepositante > .card-body > .row > :nth-child(2) > :nth-child(2) > .select2 > .selection > .select2-selection').click();
    // cy.wait(6000)
     cy.get('.select2-dropdown').contains("Demandante / VLADIMIR ALEXANDER ALONZO").click();
    //  cy.wait(6000)

}

Click_On_Guarder_btn_documento(){
    cy.get(this.guarder_documento).click();
    // cy.wait(6000)
    // click on siguente button

    cy.get("#btnSiguiente").click();
    // cy.wait(6000)
}
verify_NUC_CLick_On_Guarder(){
    cy.get('[data-element="rNUC"]').should('not.have.value', ''); 
    // cy.wait(6000)
    cy.get("#btnSiguiente").click();
    cy.get('.swal2-confirm').click();

//  cy.window().then((win) => {
//       cy.stub(win, 'open').callsFake((url) => {
//         cy.visit(url); // Open the URL in the same tab

        

//       });
//     })


 cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
            // If you just want to stay on the current page and not open a new one
            //cy.reload();  // Reload the current page
        });
    });
}
Verify_Pop_Up_Msg(){
  

// cy.get('.swal2-success-circular-line-left').should('be.visible');
//  cy.wait(5000)

//  cy.get('#swal2-title')
//   .invoke('text') 
//   .then((text) => {
//     cy.log('Confirmation Text:', text);  
//   });

cy.get('#swal2-html-container > strong')
  .invoke('text')  
  .then((text) => {
    cy.log('NUC:', text);  
  });



//   cy.get('.swal2-confirm').invoke('text') 
//   .then((text) => {
//     cy.log('OK Button:', text);  
//   });


  
}






// cy.get('.swal2-confirm').invoke('removeAttr', 'target')  // Remove the 'target' attribute
//   .then(() => {
//     const href = "https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/bdf72d29da9849dc9b25ef90f72147fa?Tipo=CT";  // Directly use the provided URL
//     cy.window().then((win) => {
//       win.location.href = href;  // Manually set the window location to navigate to the URL
//     });
         /// Raghu Sir code
//     // cy.stub(win, 'print').as('printStub');  
//   });


//   cy.window().then((win) => {
//     cy.stub(win, 'open').returns(null); // This will prevent the window from opening
//  cy.wait(6000); // Adjust as needed
//   cy.get("#swal2-title").should('be.visible');


//   });

//  cy.window().then((win) => {
//     // Now 'win' is the window object, so you can stub its 'print' method
//     cy.stub(win, 'print').as('printStub');
//   });

 












   // cy.wait(6000)
    // click on SI (yes)
    // cy.get('.swal2-confirm').click();
    // cy.wait(9000)


   //cy.get('.swal2-confirm').invoke('removeAttr', 'target').click();

    //   cy.window().then((win) => {
    //   cy.stub(win, 'print').as('print'); // Stubbing the print function
    // });

//cy.xpath("//span[@class='slds-form-element__label slds-m-vertical_xx-small inline-help']")
//  cy.get('.swal2-confirm').invoke('removeAttr', 'target')  // Remove the 'target' attribute
//   .then(() => {
//     //              https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/692a762a29e141ec80efa4e806369276?Tipo=CD
//     const href = "https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/af13bc4d4aef42e7ad5c9e76e952cf9d?Tipo=CD";  // Directly use the provided URL
//    //const href ="https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/bdf72d29da9849dc9b25ef90f72147fa?Tipo=CT";
//     win.location.href = href; 
//       cy.viewport(1280, 720); 

//    cy.stub(win, 'print').as('printStub');  
   
//    cy,wait(7000)

   

   
   //cy.document().type({ esc });
//    cy.window().then((win) => {
//      cy.window().then((win) => {
//     cy.stub(win, 'print').as('print');

//       cy.window().then(win => {
//     // win.print();
//     // expect(win.print).to.be.calledOnce;
// cy.document().its('readyState').should('eq', 'complete');
//     // this line closes the print popup
   // cy.document().type({ esc });
  //  cy.wait(9000)
  //});
 // });
     

//        cy.window().then(win => {
//     win.print();
//     //expect(win.print).to.be.calledOnce;

//     // this line closes the print popup
//     cy.document().type({ esc });
//   });

      //cy.contains('Cancel').click();
      
//   cy.window().then((win) => {
//     cy.stub(win, 'print').as('printDialog');
//   });

//   });
//    });

//   cy.get('.swal2-confirm')  // Replace with the correct selector
//     .should('be.visible')
//     .then(($button) => {
//       const url = $button.attr('https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/bdf72d29da9849dc9b25ef90f72147fa?Tipo=CT');
//       // Force navigation to the new URL in the same window
//       cy.visit(url);
//     });








//   cy.window().then(win => {
//     // win.print();
//     // expect(win.print).to.be.calledOnce;
// cy.document().its('readyState').should('eq', 'complete');
//     // this line closes the print popup
//    // cy.document().type({ esc });
//     cy.wait(9000)
//   });





    //  cy.document().type({ esc });
//     cy.wait(9000)
     // Manually set the window location to navigate to the URL

 //cy.document().its('readyState').should('eq', 'complete');
      //  cy.wait(20000);
// cy.window().then(win => {
//     win.print();
//     expect(win.print).to.be.calledOnce;

//     // this line closes the print popup
//     cy.document().type({ esc });
//     cy.wait(9000)
//   });
//      });
//    });

//   cy.contains("Cancel").click()
//   cy.wait(9000)



// cy.get('.swal2-confirm').invoke('removeAttr', 'target')  // Remove the 'target' attribute
//   .then(() => {
//     // Choose the URL conditionally
//     const href = condition ? 
//                  "https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/af13bc4d4aef42e7ad5c9e76e952cf9d?Tipo=CD" :
//                  "https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/bdf72d29da9849dc9b25ef90f72147fa?Tipo=CT";

//     cy.window().then((win) => {
//       win.location.href = href; // Navigate to the selected URL
//     });
//   });
// cy.get('.swal2-confirm').invoke('removeAttr', 'target')  // Remove the 'target' attribute
//   .then(() => {
//     // Define the condition
//     const condition = true;  // Set this to true or false based on your requirements

//     // Choose the URL conditionally
//     const href = condition ? 
//                  "https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/af13bc4d4aef42e7ad5c9e76e952cf9d?Tipo=CD" :
//                  "https://sgcdev-s2.azurewebsites.net/Presencial/Reporte/bdf72d29da9849dc9b25ef90f72147fa?Tipo=CT";

//     // Only navigate to one URL based on the condition
//     cy.window().then((win) => {
//       win.location.href = href;  // This will only navigate to the selected URL
//     });
//   });


//   cy.window().then(win => {
//     // win.print();
//     // expect(win.print).to.be.calledOnce;
// cy.document().its('readyState').should('eq', 'complete');
//     // this line closes the print popup
//     cy.document().type({ esc });
//     cy.wait(9000)
//   });








//}





 storeNUC() {
    // this.Verify_Pop_Up_Msg().then((text) => {
    //   Cypress.env('nuc', text); // Store the NUC value in the environment variable
    //   cy.log('Stored NUC:', text);
    // });

      cy.get('#swal2-html-container > strong')
      .invoke('text')
      .then((text) => {
        Cypress.env('nuc', text);
        cy.log('Stored NUC:', text);
      });
  }


   NUC() {
    //return Cypress.env('nuc');
      const nuc = Cypress.env('nuc'); 
    cy.log('Retrieved NUC:', nuc); 

    // Validation checks on the NUC
    // expect(nuc).to.not.be.empty; 
    // cy.wrap(nuc).should('contain', '2025-0080'); 

    return nuc;
    
  }

Click_ON_OK(){
cy.get('.swal2-confirm').click();
cy.wait(5000)

}







//  storeNUC() {
//      cy.storeNUCInCookie(); 
//   }
//    retrieveNUC() {
//     cy.getNUCFromCookie().then(() => {
//       cy.get('@nuc').then((nucValue) => {
//         cy.log('NUC from Cookie:', nucValue);
//         // You can add additional logic to print or use the NUC value
//         console.log('NUC:', nucValue); // This will print in the browser console
//       });
//     });
 // }

}
export default Presencial;