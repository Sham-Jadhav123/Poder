Feature: ServicoiosSecretarialsV2 Flow

  Background:
    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option


   

  Scenario:  Verify Mandatory and Optional Fields for "Tribunal" Selection
             Verify that the "Distrito Judicial" and "Tribunal" fields are 
             mandatory, while the "Sala" field remains optional when "Tipo
             de Depositante" is selected as "Tribunal"

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
    Then I click On btnmdlEditarTramite
    Then I select the Categoría_Tribunal option
    Then I click On DepartamentoJudicialProcedBloque and select option
    Then I Click On Siguiente button
    Then Again I Click on Siguiente Button
    Then I click On Nuevo Documento Button
    Then I should See the Cargar Documento window
    Then I click On tipo de Cargar dropDown and Select Documento
    Then I click On tipo de Documento dropdown and select option Acción de Amparo
    Then I click on Cargar Documento filed
    Then I select the Fecha del Documento 
    Then I Click On Tipo_de_Depositante_drop and select Tribunal
    # Then Verify that the selected Distrito Judicial with Tribunal field
    Then I check the Sala field is optional and Without it we click on Guardar