Feature: Seguridad Module Perfiles De Accesso card


  # Scenario:SignIn into application
  Background: SignIn into application

    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option

  @select_filter_registros @regression
  Scenario Outline: As a user, I goto Registros de auditoría module
    When I click on module Seguridad
    Then I validate all five card
    Then I click on Registros de auditoría card
    Then I click on Registros de auditoría tab
    Then I select filter in fecha field "<filter>" dropdown
    Then I click on search icon

    Examples:
      | filter           |
      | Última hora      |
      | Últimas 12 horas |
      | Últimas 24 horas |
      | Últimos 7 días   |
      | Últimos 30 días  |
