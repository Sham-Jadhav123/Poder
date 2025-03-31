Feature: Presential Module
    # Scenario:SignIn into application
         Background: SignIn into application

        Given Launch the URL
        When Enter Username
        When Tap on Next button
        When Enter password of user
        When Tap on SignIn button
        Then User select Yes Option




    Scenario: Recepcion,Parte, Documento, Verification Tabs 
        When User tap on Presencial button
        Then Select Civil Tribunal
        Then Select tipo de identification
        Then Enter Identification code
        Then Select expediente nuevo option
        # Then Select sede from option
        Then User Select Materia
        Then USer select tribunal option 
        Then User Select Tipo de procedimiento
        Then User Select asunto option
        Then Enter objeto and clik on Siguiente

         When User tap on add parties button
         Then User Select Tipo de involucramiento option
        Then User Select Preferencia de audiencia options from dropdown
        Then Select tipo de identification from partes tab
        Then Enter Identification from partes tab
        Then User Select Calidad      
        Then User click on Guarder button
        When User tap on add parties button
        Then User Select Tipo de involucramiento option
        Then User Select Preferencia de audiencia options from dropdown
         Then Select tipo de identification from partes tab
         Then Enter Identification for demandando
         Then User Select calidad option for demandando
        Then User Select Desea recibir notificaciones electrónicas No option
        Then User Select Direcciones disponibles
        Then User click on Guarder button

        When User tap on add parties button
         Then User Select Tipo de involucramiento option for representate
        Then User Select Vincular Partes
        Then User Select Preferencia de audiencia options from dropdown
        Then Select tipo de identification from partes tab
        Then Enter Identification for Representate
        Then Select calidad for Representate
        Then User click on Guarder button
        Then User click on Siguiente button


        When User click on agregar button
        Then User select Fecha de documento 
        Then User Select Tipo de documento
        Then User Select Seleccione el documento
        Then User Enter Cantidad de páginas
        Then User Enter Nombre del documento
        Then User Select Condición del documento
        Then click on guarder button on documento
        Then Verify NUC and click on guarder button
        Then Verify POP up message
        Then Store NUC
        Then Retrive NUC
        Then user tap on OK button

        # When User Tap on Servicios_Secretariales_V2

        # # with NUC
        # Then tap on ho hay selection button and select Número único de caso NUC
        # Then Enter NUC of the case and click on search button













