Feature: ServicoiosSecretarialsV2 Flow

  Background:
    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option

  Scenario: Verify "Depositante" Field for "Demandante" Selection
              Verify that when "Tipo de Depositante" is selected as 
              "Demandante", the "Depositante" field displays all 
              registered Demandante names.
    Given I am on Servicios Secretariales Option
    Then I should see the Servicios Secretariales Page
    When I Click on Search Dropdown Button
    # Then I Should see the Menu Bar and select NUC Option //verify nuc dropdown is working or not
    Then I click on tribunal dropdown
    Then I see the dropdown and select the option
    Then I go for date fecha selection
    Then I select the date for fecha
    Then I click on Search Icon
    Then I click On Tramitar Button to move into next page
    Then I should verify the parte button is enable or not
    Then I should see the Doctmentos and click on it
    Then I click On More option view Button
    Then I see the Editar click on it
    Then I should get Editar Documento POP 
    # start new 
    Then I click on tipo de Depositante and select Demandante
    