Feature: Casos v2 Module
    # Scenario:SignIn into application
    Background: SignIn into application

        Given Launch the URL
        When Enter Username
        When Tap on Next button
        When Enter password of user
        When Tap on SignIn button
        Then User select Yes Option

    Scenario: Verify NUC Search Functionality in Casos V2 Module
       When User tap on Casos V2 module
       Then User Tap On Seleccioner menu and select NUC
    #    Then Enter NUC and click on search
    # Then User Select Tribunal from casos v2
    # Then User Select Sala from Casos V2 

