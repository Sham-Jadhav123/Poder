import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
//import ServicoiosSecretarialsV2Page from "../pages/ServicoiosSecretarialsV2Page";
import ServicoiosSecretarialsV2Page from '../Pages/ServicoiosSecretarialsV2Page';





Given("I am on Servicios Secretariales Option", () => {
	ServicoiosSecretarialsV2Page.SearchAndCLick();
});


Then("I should see the Servicios Secretariales Page", () => {
	ServicoiosSecretarialsV2Page.DisplayPage();
});


When("I Click on Search Dropdown Button", () => {
	ServicoiosSecretarialsV2Page.dropdownMenuClick();
});


Then("I Should see the Menu Bar and select NUC Option", () => {
	ServicoiosSecretarialsV2Page.SelctOption();
});

Then("I click on tribunal dropdown", () => {
	ServicoiosSecretarialsV2Page.tribunalDropdown();
});

When("I see the Option and select the option", () => {
	ServicoiosSecretarialsV2Page.SelectTribunalOption();
});

When("I Click the Materia dropdown", () => {
	ServicoiosSecretarialsV2Page.MateriaDropdown();
});

Then("I see the Option and select one option from them", () => {
	ServicoiosSecretarialsV2Page.SelectMateriaOption();
});


Then("I click on Asunto dropdown and select DEMANDA CIVIL", () => {
	ServicoiosSecretarialsV2Page.AsuntoDropdown();
	// ServicoiosSecretarialsV2Page.SelectOption_Asunto();
});


When("I click on fecha de recepcion", () => {
	ServicoiosSecretarialsV2Page.ClickOnFecha();
});

Then("I should have the Calender pop and select one date", () => {
	ServicoiosSecretarialsV2Page.SelectFechaDate();
	
});

Then("I click on Search Icon", () => {
	ServicoiosSecretarialsV2Page.ClickOnSearchIcon();
});


When("I see the TramitesElements into page", () => {
	ServicoiosSecretarialsV2Page.TramitesElements();
});


When("I Should See the Tramitar Icon", () => {
	ServicoiosSecretarialsV2Page.TramitarButton();
});



Then("I select the tramitar element with using nuc", () => {
	ServicoiosSecretarialsV2Page.ClickTramitarIcon();
});



Then("I click on tramitar Button", () => {
	ServicoiosSecretarialsV2Page.ClickOnTramitarButton();
});



Then("I validate the edit Page is for Same NUC or not", () => {
	ServicoiosSecretarialsV2Page.ValidateEditPage();
});



When("I click on Siguiente button", () => {
	ServicoiosSecretarialsV2Page.ClickOnSiguiente();
});


Then("I should get the parte de tramite Page", () => {
	ServicoiosSecretarialsV2Page.PartePageValidate();
});

When("I click on Edit button", () => {
	ServicoiosSecretarialsV2Page.ClickonEdit_btn();
});


Then("the Pop screen should be display which is Registro de parte", () => {
	ServicoiosSecretarialsV2Page.Registro_page();
});



Then("I click on Tipo_Calidad Dropdown", () => {
	ServicoiosSecretarialsV2Page.TipoDropdown();
});


Then("I Change the Selected option Demandado to Imputado", () => {
	ServicoiosSecretarialsV2Page.SelectTipoCildad_option();
});

Then("I search for Tiop_de_notificion and select the option", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_notificion_dropdown();
});



Then("I click on Guardar Botton to save changes", () => {
	ServicoiosSecretarialsV2Page.ClickOnGuardar();
});


When("I see the Editor page again", () => {
	ServicoiosSecretarialsV2Page.Editor_page_check();
});


Then("I click on Edit botton of estado dominicano", () => {
	ServicoiosSecretarialsV2Page.Estado_dominicano_Validation();
});



Then("I Click on Tipo Calidad Dropdowm", () => {
	ServicoiosSecretarialsV2Page.Verify_the_Tipo_calidad();
});


When("I See the Other options into dropdown menu", () => {
	ServicoiosSecretarialsV2Page.See_Tipo_dropdown_menu();
});


Then("I Select One of them is Defensor Publico", () => {
	ServicoiosSecretarialsV2Page.Select_option_from_tipoDropdown();
});




Then("I need to select the Preferencia de Audiencia", () => {
	ServicoiosSecretarialsV2Page.Preferencia_drop_down();
});


Then("I click on Tipo de notificia dropdown in Datos", () => {
	ServicoiosSecretarialsV2Page.Datos_Tipo_de_notificia();
});


Then("I select the Telematica option from tipo de notificia dropdown", () => {
	ServicoiosSecretarialsV2Page.Select_Option_datos_tipo_dropdown();
});




Then("I See the Guardar Button and Click that button", () => {
	ServicoiosSecretarialsV2Page.Guadar_btn_click();
});


Then("I Verify that Calidad is change as Defensor Público or not", () => {
	ServicoiosSecretarialsV2Page.verification_Calidad();
});
//different scenario


Given("I should see the close cross", () => {
	ServicoiosSecretarialsV2Page.Close_Cross_Visible();
});



Then("I click on that cross close btn", () => {
	ServicoiosSecretarialsV2Page.Close_the_page();
});



Then("I should verify the parte button is enable or not", () => {
	ServicoiosSecretarialsV2Page.Parte_Button_verification();
});




Then("I click On the Registrar Parte Button", () => {
	ServicoiosSecretarialsV2Page.ClickOnRegistrarBTN();
});


Then("I click On Tipo Parte Dropdown and select Parte", () => {
	ServicoiosSecretarialsV2Page.ClickOnTipoparte();
});



Then("I select parte As dropdown Option", () => {
	ServicoiosSecretarialsV2Page.SelectParte();
});


Then("I click on Tipo calidad dropdown and select No parte Involucrada", () => {
	ServicoiosSecretarialsV2Page.ClickOnTipoCalidad();
});


Then("I search the element and select it from the dropdown menu", () => {
	ServicoiosSecretarialsV2Page.SearchElementInTipocalidad();
});



Then("I go to the Datos notificia container and check the container is disabled or not", () => {
	ServicoiosSecretarialsV2Page.Datos_Container_Disabled();
});




Then("I click on tipo de Identificaion and select Cedula from dropdown", () => {
	ServicoiosSecretarialsV2Page.tipo_de_identificaion_field();
});


Then("I Click on Identificaion Search Box and search 77777777777 and click search btn", () => {
	ServicoiosSecretarialsV2Page.identificaion_field();
});





Then("I click on Preferencia de Audiencia and select the Virtual option", () => {
	ServicoiosSecretarialsV2Page.PreferenciaDropdown();
});


Then("I should see Guardar button and press on it", () => {
	ServicoiosSecretarialsV2Page.Guadar_btn_click();
});


Then("I see the duplicate error pop and handle it or continue the execution", () => {
	ServicoiosSecretarialsV2Page.Duplicato_pOp();
});

Then("I close the window of registro de parte after fill all fields", () => {
	ServicoiosSecretarialsV2Page.CloseTheWindowpage();
});
// different scenario

Then("I see the dropdown and select the option", () => {
	ServicoiosSecretarialsV2Page.Select_tribunal_dropdown();
});

Then("I go for date fecha selection", () => {
	ServicoiosSecretarialsV2Page.ClickOnFeach_datePicker();
});

Then("I select the date for fecha", () => {
	ServicoiosSecretarialsV2Page.Select_date_enero();
});

Then("I should see the Doctmentos and click on it", () => {
	ServicoiosSecretarialsV2Page.Documento_section();
});


Then("I click On Tramitar Button to move into next page", () => {
	ServicoiosSecretarialsV2Page.ClickOn_Tramitar_btn();
});


Then("I click On More option view Button", () => {
	ServicoiosSecretarialsV2Page.Click_on_moreOption_btn();
});


Then("I see the Editar click on it", () => {
	ServicoiosSecretarialsV2Page.ClickOn_Editar();
});


Then("I should get Editar Documento POP", () => {
	ServicoiosSecretarialsV2Page.Editar_Documento_POP();
});

Then("I Click Tipo de Depositante and select Parte No Involucrada", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositente_Filed();
});

Then("I click On Representante and select present option", () => {
	ServicoiosSecretarialsV2Page.FIll_Representate();
});

Then("I Click on Depositante dropdown and select First option", () => {
	ServicoiosSecretarialsV2Page.Depentante_Field();
});


Then("I click on Depositante and choose Parte No Involucrada", () => {
	ServicoiosSecretarialsV2Page.Depentante_Field_tipo();
});

//new- ssv2_11
Then("I click on tipo de Depositante and select Demandante", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositente_11();
});
//new -ssv2_12


Then("I click on tipo_de_Depositentate dropdown", () => {
	ServicoiosSecretarialsV2Page.Dropdown_Tipo_Depositentate();
});

Then("I see the dropdown menu and Select Demandado option", () => {
	ServicoiosSecretarialsV2Page.Select_Demendando();
	
});

Then("I fill the values into fields presented", () => {
	ServicoiosSecretarialsV2Page.Error_handle();
});

Then("I click On btnmdlEditarTramite", () => {
	ServicoiosSecretarialsV2Page.btnmdlEditarTramite();
});

Then("I select the Categoría_Tribunal option", () => {
	ServicoiosSecretarialsV2Page.Categoría_Tribunal();
});

Then("I click On DepartamentoJudicialProcedBloque and select option", () => {
	ServicoiosSecretarialsV2Page.DepartamentoJudicial();
});

Then("I Click On Siguiente button", () => {
	ServicoiosSecretarialsV2Page.ClickOnSiguienteBtn();
});

Then("Again I Click on Siguiente Button", () => {
	ServicoiosSecretarialsV2Page.ClickOnSiguienteBtn();
});

Then("I click On Nuevo Documento Button", () => {
	ServicoiosSecretarialsV2Page.CrearNuevoDocumento();
});

Then("I should See the Cargar Documento window", () => {
	ServicoiosSecretarialsV2Page.Cargar_Documento_Page();
});

Then("I click On tipo de Cargar dropDown and Select Documento", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_Cargar_dropDown();
});

Then("I click On tipo de Documento dropdown and select option Acción de Amparo", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_Documentoo_dropdown();
});

Then("I click on Cargar Documento filed", () => {
	ServicoiosSecretarialsV2Page.Cargar_Documento_Upload();
});


Then("I select the Fecha del Documento", () => {
	ServicoiosSecretarialsV2Page.select_Fecha_del_documento();
});


Then("I Click On Tipo_de_Depositante_drop and select option", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_Depositante_drop();
});

// Then("I click On Depositante dropdown Field", () => {
// 	ServicoiosSecretarialsV2Page.Depositenate_field_Doc();
// });

Then("I click On Guardar button", () => {
	ServicoiosSecretarialsV2Page.click_On_guardar_btn_document();
});

Then("I click on confirm button of POP", () => {
	ServicoiosSecretarialsV2Page.Ok_btn_confirmed_pop();
});

Then("I click On Finesher", () => {
	ServicoiosSecretarialsV2Page.Finalizar_Btn();
});
//ssv2_20


Then("I click On Tipo_de_Depositante_dropdown and Select Demandante", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_Depositante_drop_ssv2_20();
});

Then("I click On Depositado_dropdown and select First Option", () => {
	ServicoiosSecretarialsV2Page.Depositenate_field_Doc();
});

Then("I select Highlighted Option", () => {
	ServicoiosSecretarialsV2Page.Select_Depositante_20();
});


//ssv2_21


Then("I click On Tipo_de_Depositante_dropdown and Select Demandado", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositante_21();
});

Then("I click On Depositado_dropdown and select Option", () => {
	ServicoiosSecretarialsV2Page.Depositenate_field_Doc();
	ServicoiosSecretarialsV2Page.Select_Depositante_20();
});


Then("I click On Tipo_de_Depositante_dropdown and Select Participante", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositante_22();
});

Then("I click On Tipo_de_Depositante_dropdown and Select Parte No Involucrada", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositante_24();
});

Then("I click On Depositado_dropdown and select Highlighted Option", () => {
	ServicoiosSecretarialsV2Page.Depositante_Field_DocumentO();
});

Then("I click On Tipo_de_Depositante_dropdown and Select Representante", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositante_23();
});

Then("I click On Tipo_de_Depositante_dropdown and Select Componente Tribunal", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_depositante_25();
});
//ssv2_27

Then("I Click On Tipo_de_Depositante_drop and select Tribunal", () => {
	ServicoiosSecretarialsV2Page.Tipo_de_Depositante_drop();
});

Then("Verify that the selected Distrito Judicial with Tribunal field", () => {
	ServicoiosSecretarialsV2Page.Distrito_Judicial_dropdown();
	ServicoiosSecretarialsV2Page.Tribunal_Field_Compare_To_Distrito();
});
//ssv2_28

Then("I check the Sala field is optional and Without it we click on Guardar", () => {
	ServicoiosSecretarialsV2Page.Sala_Field_required();
	ServicoiosSecretarialsV2Page.click_On_guardar_btn_document();
});
