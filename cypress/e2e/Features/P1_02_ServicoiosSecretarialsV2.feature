Feature: ServicoiosSecretarialsV2 Flow
  Background: SignIn into application
    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option

  Scenario: Search NUC and Verify Case Status Verify that the system can search a case by NUC and display correct status.

    Given I am on Servicios Secretariales Option
    Then I should see the Servicios Secretariales Page
    When I Click on Search Dropdown Button
    # Then I Should see the Menu Bar and select NUC Option //verify nuc dropdown is working or not
    Then I click on tribunal dropdown
    When I see the Option and select the option
    When I Click the Materia dropdown
    Then I see the Option and select one option from them
    Then I click on Asunto dropdown and select DEMANDA CIVIL
    When I click on fecha de recepcion
    Then I should have the Calender pop and select one date
    Then I click on Search Icon
    When I see the TramitesElements into page
    When I Should See the Tramitar Icon
    Then I select the tramitar element with using nuc
    Then I click on tramitar Button
    Then I validate the edit Page is for Same NUC or not
  Scenario: Avoid the NUC and Bypass way to search and validate scenarios
    Given I am on Servicios Secretariales Option
    Then I should see the Servicios Secretariales Page
    When I Click on Search Dropdown Button
    # Then I Should see the Menu Bar and select NUC Option
    Then I click on tribunal dropdown
    When I see the Option and select the option
    When I Click the Materia dropdown
    Then I see the Option and select one option from them
    Then I click on Asunto dropdown and select DEMANDA CIVIL
    When I click on fecha de recepcion
    Then I should have the Calender pop and select one date
    Then I click on Search Icon
    When I see the TramitesElements into page
    When I Should See the Tramitar Icon
    Then I select the tramitar element with using nuc
    Then I click on tramitar Button
    Then I validate the edit Page is for Same NUC or not
    When I click on Siguiente button
    Then I should get the parte de tramite Page
    When I click on Edit button
    Then the Pop screen should be display which is Registro de parte
    Then I click on Tipo_Calidad Dropdown
    Then I Change the Selected option Demandado to Imputado
    Then I search for Tiop_de_notificion and select the option
    Then I click on Guardar Botton to save changes
    When I see the Editor page again
    Then I click on Edit botton of estado dominicano
    Then I Click on Tipo Calidad Dropdowm
    When I See the Other options into dropdown menu
    Then I Select One of them is Defensor Publico
    Then I need to select the Preferencia de Audiencia
    Then I click on Tipo de notificia dropdown in Datos
    Then I select the Telematica option from tipo de notificia dropdown
    Then I See the Guardar Button and Click that button
    Then I Verify that Calidad is change as Defensor Público or not

  Scenario: Verify "Datos de Notificación" Field Behavior Based on "Tipo Calidad" Selection Verify that when "Tipo Calidad" is selected as "Parte No Involucrada", the  "Datos de Notificación" field is disabled. For any other "Parte" selection,  the field should be enabled.
    When I see the Option and select the option
    When I Click the Materia dropdown
    Then I see the Option and select one option from them
    Then I click on Asunto dropdown and select DEMANDA CIVIL
    When I click on fecha de recepcion
    Then I should have the Calender pop and select one date
    Then I click on Search Icon
    When I see the TramitesElements into page
    When I Should See the Tramitar Icon
    Then I select the tramitar element with using nuc
    Then I click on tramitar Button
    Then I validate the edit Page is for Same NUC or not
    Given I should see the close cross
    Then I click on that cross close btn
    Then I should verify the parte button is enable or not
    Then I click On the Registrar Parte Button 
    Then I click On Tipo Parte Dropdown and select Parte
    Then I select parte As dropdown Option
    Then I click on Tipo calidad dropdown and select No parte Involucrada
    Then I search the element and select it from the dropdown menu
    Then I go to the Datos notificia container and check the container is disabled or not
    Then I click on tipo de Identificaion and select Cedula from dropdown
    Then I Click on Identificaion Search Box and search 77777777777 and click search btn
    Then I click on Preferencia de Audiencia and select the Virtual option
    Then I should see Guardar button and press on it
    Then I see the duplicate error pop and handle it or continue the execution
    Then I close the window of registro de parte after fill all fields 

  Scenario: "Verify Label Update Based on Document Edit Type
          Verify that when editing a document for ""Parte No Involucrada"", 
          the field label displays ""Emitido por"". When editing a document for 
          ""Representante"" or other ""Parties"", the field label displays ""Depositado por""."
    Then I see the dropdown and select the option 
    Then I go for date fecha selection
    Then I select the date for fecha 
    Then I click on Search Icon
    Then I click On Tramitar Button to move into next page
    # Given I should see the close cross
    # Then I click on that cross close btn
    Then I should verify the parte button is enable or not
    Then I click On the Registrar Parte Button
    Then I click On Tipo Parte Dropdown and select Parte
    Then I select parte As dropdown Option
    Then I click on Tipo calidad dropdown and select No parte Involucrada
    Then I search the element and select it from the dropdown menu
    Then I click on tipo de Identificaion and select Cedula from dropdown
    Then I Click on Identificaion Search Box and search 77777777777 and click search btn
    Then I click on Preferencia de Audiencia and select the Virtual option
    Then I click On Representante and select present option
    Then I should see Guardar button and press on it
    Then I see the duplicate error pop and handle it or continue the execution
    Then I close the window of registro de parte after fill all fields
    Then I should see the Doctmentos and click on it
    Then I click On More option view Button
    Then I see the Editar click on it
    Then I should get Editar Documento POP
    Then I click on Depositante and choose Parte No Involucrada
    # Then I Click Tipo de Depositante and select Parte No Involucrada
    # Then I Click on Depositante dropdown and select First option 

  # Scenario: Avoid the NUC and Bypass way to search
  #   Given I am on Servicios Secretariales Option
  #   Then I should see the Servicios Secretariales Page
  #   When I am click on tribunal dropdowns
  #   Then I Select One option form that Menu
  #   Given I Should See the Option into Field of Tribunal dropdown
