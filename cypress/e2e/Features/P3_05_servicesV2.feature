Feature: Go to Services V2 module and Update documents


  # Scenario:SignIn into application
  Background: SignIn into application

    Given Launch the URL
    When Enter Username
    When Tap on Next button
    When Enter password of user
    When Tap on SignIn button
    Then User select Yes Option

  @ssv2_cargar_documento @regression
  Scenario Outline: I goto Services v2 module and add documents for Demandante
    Then I am on home page of poder website
    Then I click on module "Servicios Secretariales v2"
    Then I search procedure with tribunal, sala and date
    Then I click on search icon
    Then I verify NUC number
    Then I click on tramite icon
    Then I click on Documentos tab
    Then I click on cargar icon
    Then I verify Cargar Documento page
    Then I select Documento in Tipo de carga field
    Then I select one document from Tipo de documento field
    Then I upload document in Cargar documento field
    Then I select select date in Fecha del documento
    Then I select Tipo de Depositante as "<field>"
    Then I select Depositante
    Then I click on Guardar SSV2

    Examples:
      | field                |
      | Demandante           |
      | Demandado            |
      | Participante         |
      | Representante        |
      | Parte no involucrada |
      | Componente Tribunal  |
