Feature: Asignaciones Module
    # Scenario:SignIn into application
    Background: SignIn into application

        Given Launch the URL
        When Enter Username
        When Tap on Next button
        When Enter password of user
        When Tap on SignIn button
        Then User select Yes Option

    Scenario:Verify Case Listing and Sala Assignment Visibility
        When User Tap On Asignaciones
        Then User Select Tribunal From Asignaciones page
        Then User Select Nuc from asignaciones page
        Then User Enter NUC And click on search button of Asignaciones
        

