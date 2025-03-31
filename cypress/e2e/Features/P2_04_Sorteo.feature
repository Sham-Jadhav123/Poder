Feature: Sorteo Module
    # Scenario:SignIn into application
    Background: SignIn into application

        Given Launch the URL
        When Enter Username
        When Tap on Next button
        When Enter password of user
        When Tap on SignIn button
        Then User select Yes Option

    Scenario: verify Asuntos Urgentes page
        When User tap on Sorteo button
        Then Verify ASIGNACIONES DE SALA page 
        Then Verify Asuntos Urgentes tab selected and active
        Then Verify Tribunal dropdown is visible and interactable
         Then Retrive the tribunal previsouly selected in the presencial moudle and select tribunal

    Scenario:Verify the NUC search functionality
        When User tap on Sorteo button
        Then User Nevigate to Todos tab
        Then Retrive the tribunal previsouly selected in the presencial moudle and select tribunal
        Then User Select Civil from materia dropdown
        Then Select NUC from criterio
        Then Enter NUC and click on search
        Then Verify Case Details

    Scenario:Verify the functionality of the "Sortear" button and Sala assignment
        When User tap on Sorteo button
        Then User Nevigate to Todos tab
        Then Retrive the tribunal previsouly selected in the presencial moudle and select tribunal
        Then User Select Civil from materia dropdown
        Then Select NUC from criterio
        Then Enter NUC and click on search
        Then Verify Case Details
        Then User Select Case CheckBox
        Then User Tap on Altero button
        # Then User is verify Judge is display or not
        Then User Tap on sortear button
        


      

        
