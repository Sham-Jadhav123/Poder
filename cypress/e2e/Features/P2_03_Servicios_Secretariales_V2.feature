Feature: Servicios_Secretariales_V2
    # Scenario:SignIn into application
    Background: SignIn into application

        Given Launch the URL
        When Enter Username
        When Tap on Next button
        When Enter password of user
        When Tap on SignIn button
        Then User select Yes Option


    Scenario: "Search NUC and Verify Case Status Verify that the system can search a case by NUC and display correct status"
        When User Tap on Servicios_Secretariales_V2

        # with NUC
        #  Then tap on ho hay selection button and select Número único de caso NUC
        # Then Enter NUC of the case and click on search button

        Then User Select Tribunal from Servicios v2
        Then User Select materia from Servicios Secretariales_V2
        Then User Select Asunto from Servicios
        Then User Select Fetcha de recepcion from servicios
        Then User Tap on Search button
        Then Created NUC Should be display and Verify NUC
        Then User Tap on Tramitar button
        Then Click on Siguiente button from Tramitar 
        Then User Tap on represetante edit button
        Then User Select Preferencia de audiencia and Tipo de identificación
        Then User tap on Guarder button Parte
        Then User Should click on Siguiente button from partes tab
        Then User click on Finalizer button
        Then User verify pop up success msg and click on ok button




