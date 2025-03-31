Feature: Presential Module
  # Scenario:SignIn into application
  Background: SignIn into application

    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option

  @verify_seguridad_card @regression
  Scenario: As a user I validate all cards
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card

  @click_on_ususrio_card_seguridad @regression
  Scenario: As a user I click on Usuario card
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I validate users list

  @validate_asigner_permisos_tab @regression
  Scenario: As a user I search user and validate Asignar Permisos tab
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I search user by email
    Then I click on edit option
    Then I validate Asignar Permisos Tab

  @validate_permisos_actual_tab @regression
  Scenario: As a user I search user and validate Permisos Actuales tab
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I search user by email
    Then I click on edit option
    Then I validate Permisos Actuales Tab

  @add_profile_to_user @regression
  Scenario: As a user I search user and add profile and click on guardar
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I search user by email
    Then I click on edit option
    Then I select mandatory fields usuarios
    Then I click on Guardar

  @edit_permisos_from_permisos_actual_tab @regression
  Scenario: As a user I search user and goto Permisos Actuales tab and click on edit Permisos
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I search user by email
    Then I click on edit option
    Then I goto Permisos Actuales tab
    Then I click on edit option of Permisos

  @delete_permisos_from_permisos_actual_tab @regression
  Scenario: As a user I search user and goto Permisos Actuales tab and click on delete Permisos
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I search user by email
    Then I click on edit option
    Then I goto Permisos Actuales tab
    Then I click on delete option of Permisos

  @search_permisos_in_permisos_actual_tab @regression
  Scenario: As a user I search user and goto Permisos Actuales tab and search Permisos
    Then I am on home page of poder website
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Usuario card
    Then I search user by email
    Then I click on edit option
    Then I goto Permisos Actuales tab
    Then I search permission by name or sala
