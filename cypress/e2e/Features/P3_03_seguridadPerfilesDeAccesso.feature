Feature: Seguridad Module Perfiles De Accesso card


  # Scenario:SignIn into application
  Background: SignIn into application

    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option

  @add_new_profile_in_perfils_de_accesso @regression
  Scenario: As a user I goto Perfiles de Accesso card and add new Profile
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Perfiles De Accesso card
    Then I click on Agregar perfil button
    Then I enter name into Nombre del perfil field
    Then I enter discription into Descripción del perfil field
    Then I select 3 modules
    Then I click on Guardar

  @view_details_of_profile @regression
  Scenario: As a user I goto Perfiles de Accesso card and view details of profile
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Perfiles De Accesso card
    Then I search profile by name "Adarleny"
    Then I click on view details button of profile

  @edit_details_of_profiles_and_delete_profile @regression
  Scenario: As a user I goto Perfiles de Accesso card then edit details of profile then delete profile
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Perfiles De Accesso card
    Then I search profile by name "Adarleny"
    Then I click on edit profile option
    Then I edit info - select 2 module
    Then I click on Guardar edit profile
    Then I click on OK button
    # Then I search profile by name "Adarleny"
    # Then I click on delete profile icon
    # Then I click on Desactivar button

  @delete_Administrador_profile @regression
  Scenario: As a user I goto Perfiles de Accesso card then Delete system base profile
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Perfiles De Accesso card
    Then I search profile by name "Administrador"
    Then I click on delete profile icon
    Then I click on OK button

  @delete_profile_which_have_users @regression
  Scenario: As a user I goto Perfiles de Accesso card then Delete system base profile
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Perfiles De Accesso card
    Then I search profile by name "Adarleny"
    Then I click on delete profile icon
    Then I click on Desactivar button

  @bulk_user_account_creation @regression
  Scenario: As user I goto Perfiles de Accesso card and create bulk user accoint in perfil
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Perfiles De Accesso card
    Then I search profile by name "Adarleny"
    Then I click on edit profile option
    Then I click on Adición de usuarios masivos tab
    Then I select mandatory fields Perfil de Accesso
    Then I upload valid excel file in Archivo field
