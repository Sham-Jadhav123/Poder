class ServicoiosSecretarialsV2Page
{
    Selectors = {
        ServicoiosOption: '#ServiciosSecretarialesV2 > .nav-link > .pj-montserrat-medium-16',
        PageTitle: '.text-2xl.text-black.font-bold',
        DropdownBtn:'button[title="No hay selección"] div[class="filter-option-inner-inner"]',
        DropDownMenu: 'div[class="dropdown-menu show"]',
        tribunal_dropdown: ':nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn',
        option_tribunal: ':nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner',
        materia_dropdown: '//div[contains(text(),"Seleccione una materia")]',
        option_Materia: '//div[@class="dropdown-menu show"]',
        Fecha_date_container:'.txtFechaRecepcion__wrapper',
        Date_selected: '//div[@class="flatpickr-calendar rangeMode animate arrowTop arrowLeft open"]//div[@class="dayContainer"]',
        oneDateSelected: '.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="Marzo 11, 2025"]',
        searchIcon:'//button[@id="btnCriteroBusqueda"]',
        tblServTramitesElement:'//body//div//section//li[1]',
        asunto_dropdown: '//div[contains(text(),"Seleccione un asunto")]',
        search_Asunto: '//div[@class="dropdown-menu show"]//input[@aria-label="Search"]',
        select_asunto:'//span[normalize-space()="DEMANDA CIVIL"]',
        tramitar_Btn:'[data-index="0"] > .self-center > .btnTramitar',
        tramitar_container:'.content.flex-1.ctlayout',
        tramitar_buttton:'[data-index="2"] > .self-center > .btnTramitar',
        EditorPageValidate:'#mdlInfoTramite > .modal-dialog > .modal-content > .modal-header',
        siguienteBtn: '#progress-next',
        scrollthescreen:'#mdlInfoTramite',
        PartePage:'//div[normalize-space()="Partes del trámite"]',
        Edit_btn:'//body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/ul[1]/li[2]/div[4]/button[1]',
        ScrollthePageToclick:'//div[@id="mdlInfoTramite"]',
        RegistroPageVadite:'//h5[normalize-space()="Registro de parte"]',
        Tipo_Calidad:'.bodyRegistroparte > :nth-child(1) > :nth-child(2) > .inputWrap > .mt-1 > .dropdown > .btn',
        select_ele_tipo_calidad: '//div[@aria-expanded="true"]',
        Tiop_de_notificion:'//div[contains(text(),"Seleccione el tipo de notificación")]',
        tipo_option_select: '//span[@class="text"][normalize-space()="Telemática"]',
        Guardar_btn:'#mrpBtnGuardarParte',
        Editor_page:'#mdlInfoTramite > .modal-dialog > .modal-content > .modal-header > .modal-title > .font-bold',
        Estado_dominicano_Lawyer: '#tblRegistrosPartes > .fmba-pages > .fmba-page-item > [data-index="0"]',
        Estado_Edit_button: '//body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/ul[1]/li[1]/div[4]/button[1]',
        Tipo_calidad_dropdown:'.bodyRegistroparte > :nth-child(1) > :nth-child(2) > .inputWrap > .mt-1 > .dropdown > .btn',
        tipo_calidad_Menu:'//div[@aria-expanded="true"]',
        Select_Defensor_publico:'//span[normalize-space()="Defensor Público"]',
        ClickOnGuardar: '//button[@id="mrpBtnGuardarParte"]',
        preferencia_de_Auidiencia: '.bodyRegistroparte > :nth-child(1) > :nth-child(3) > .inputWrap > .mt-1 > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner',
        Select_Preferencia_option:'//div[@class="dropdown bootstrap-select pjSelect show"]//li[3]//a[1]',
        tipo_de_notification_datos:'.bodyInformacionGeneral > :nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn',
        select_telematic:'//div[@class="containerInformacionGeneral mt-4"]//div[@class="mt-1 rounded-lg"]//li[3]//a[1]',
        Verify_Calidad:'#tblRegistrosPartes > .fmba-pages > .fmba-page-item > [data-index="0"] > .flex-col > :nth-child(1)',
        // different scenario
        CloseCrossBtn:'#mdlInfoTramite > .modal-dialog > .modal-content > .modal-header > .close > span',
        parte_btn:'.tabParte',
        Registrar_Parte_btn:'#btnRegistrarPartes',
        Registrar_Parte_Page:'#mdlRegistroparte > .modal-dialog > .modal-content > .modal-header > .modal-title',
        Tipo_parte_Registrar_Page:'.bodyRegistroparte > :nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn',
        Tipo_parte_element:':nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(2) > .dropdown-item',
        tipo_calidad_registrar_Page:'.bodyRegistroparte > :nth-child(1) > :nth-child(2) > .inputWrap > .mt-1 > .dropdown > .btn',
        Serach_tipo_calidad:'.bodyRegistroparte > :nth-child(1) > :nth-child(2) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control',
        firstElementInTipoCalidad:'.bodyRegistroparte > :nth-child(1) > :nth-child(2) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item > .text',
        Preferencia_de_AudienciaDropdown:'.bodyRegistroparte > :nth-child(1) > :nth-child(3) > .inputWrap > .mt-1 > .dropdown > .btn',
        Select_virtual_option:'.bodyRegistroparte > :nth-child(1) > :nth-child(3) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(4) > .dropdown-item > .text',
        Datos_de_Notifica_Container:'.bodyInformacionGeneral > :nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner',
        Tipo_de_Identificaion:'.bodyDatosPersonales > :nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn',
        Cedula_Select:'.bodyDatosPersonales > :nth-child(1) > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(2) > .dropdown-item > .text',
        IdentificainSearchBox:'#mrpIdentificacion',
        SearchBtnforidentificaion:'#mrpBtnBuscaIdentificacion',
        nacionalidaddropdown:'.noNacionalidad > .inputWrap > .mt-1 > .dropdown > .btn',
        SexoDropDown:'.bodyDatosPersonales > :nth-child(2) > :nth-child(4) > .inputWrap > .mt-1 > .dropdown > .btn',
        Pop_verification_duplicate:'.swal2-popup',
        Pop_confirm:'.swal2-confirm',
        Information_pop:'.swal2-popup',
        close_registro_page:'#mdlRegistroparte > .modal-dialog > .modal-content > .modal-header > .close > span',
        // different scenario
        Documento_btn:'.taDocumento',
        // Month_change:'.open > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .flatpickr-monthDropdown-months',
        select_date_for_third:'.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="Marzo 19, 2025"]',
        Tramitar_btn_0:'[data-index="0"] > .self-center > .btnTramitar > .iconTramitar',
        More_option:'i[class="fas fa-ellipsis-h text-[25px]"]',
        Select_Editar:'//span[normalize-space()="Editar"]',
        Editar_Documento_pop:'#mdlEditarDocumentoIndice > .modal-dialog > .modal-content > .modal-header > .modal-title',
        Tipo_de_depositente:'.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > .btn',
        Search_Box_tipodeDeppositente:'.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control',
        Select_option_from_tipodedepositente:'.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item > .text',
        Representrate:'#divRepresentante > .inputWrap > .mt-1 > .dropdown > .dropdown-toggle',
        Representrate_Option:'#divRepresentante > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li > .dropdown-item > .text',
        close_Representrate_field:'#divRepresentante > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .popover-header > .close',
        Depentante:'#editarDepositante > .inputWrap > .form-group > .dropdown > .dropdown-toggle',
        // ssv2_11
        select_Demandante:'.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(3) > .dropdown-item > .text',
        // ssv2_30
        tramita_btn:'#btnmdlEditarTramite',
        window_tramitar:'#tagtramite > .h-80 > .flex-col',
        Categoría_Tribunal_de_Origen:'#modalOrigenDelAsunto > .mt-4 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn',
        Categoría_option:'#modalOrigenDelAsunto > .mt-4 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(2) > .dropdown-item > .text',
        Distrito_Judicial:'#modalOrigenDelAsunto > .mt-4 > #metDistritoJudicialProcedBloque > .inputWrap > .mt-1 > .dropdown > .btn',
        Distrito_Judicial_option:'#modalOrigenDelAsunto > .mt-4 > #metDistritoJudicialProcedBloque > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.selected > .dropdown-item',
        Nuevo_Documento_btn:'#btnCrearNuevoDocumento',
        Cargar_Documento:'#expediente-digital-entrada-documento > .modal-dialog > .modal-content > .modal-header > .modal-title',
        Tipo_de_Cargar:':nth-child(1) > .form-group > .select2 > .selection > .select2-selection',
        Documentos_option:'.select2-results__option--highlighted',
        Tipo_de_Documentoo:'#expediente-digital-entrada-documento-formulario > :nth-child(1) > :nth-child(2) > .form-group > .select2 > .selection > .select2-selection',
        Tipo_de_documentoo_option:'.select2-results__option--highlighted',
        Cargar_Documento_Upload_Field:'.EdicionSpanERRORCargaD',
        Fecha_Select:'#expediente-digital-entrada-documento-formulario-FechaDocumento',
        Select_fecha:'.today > div',
        Tipo_de_Depositante_fieldss:'#divisionLine1 > :nth-child(2) > .form-group',
        Tipo_de_Depositante_Search_box:'.select2-dropdown > .select2-search > .select2-search__field',
        Tipo_de_Depositante_Select:'[data-select2-id="139"]',
        Guardar_btn_doc:'#expediente-digital-entrada-documento > .modal-dialog > .modal-content > .modal-footer > .btn-primary',
        Ok_btn_confirm:'.swal2-confirm',
        Finalizar:'#BtnFinalizar',
        Tipo_de_Depositante_drop_29_select:'.select2-results__option',
        Depositante_Field_DropDown_doc:'#cargar-depositante > .form-group > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field',
        Tipo_de_Depositante_drop_21_select:'.select2-results__option--highlighted',
        //ssv2_27 
        Distrito_Judicial_verify:'#select2-expediente-digital-entrada-documento-formulario-IdDistritoJudicial-container',
        Tribunal_Verify_to_Distrito:'#select2-expediente-digital-entrada-documento-formulario-IdTribunal-container',
        Sala_field:'#cargar-sala > .form-group > .select2 > .selection > .select2-selection'





        // linkforRedirect: "https://sgcdev-s2.azurewebsites.net/ServiciosSecretarialesV2/Tramitar/M11vNV0zQlQ!P!"
    };

    SearchAndCLick()
    {
        cy.wait(2000)
        cy.get(this.Selectors.ServicoiosOption,{timeout:10000})
        .scrollIntoView()
        .should('include.text','Servicios Secretariales v2');

        cy.get(this.Selectors.ServicoiosOption)
        .click();
    }
    DisplayPage()
    {
        cy.get(this.Selectors.PageTitle)
        .should('have.text','Servicios Secretariales')
    }
    dropdownMenuClick()
    {
        cy.wait(2000);
        cy.get(this.Selectors.DropdownBtn)
        .click();

    }
    SelctOption()
    {
        // cy.xpath('//span[contains(@xpath, "1")]').click();
        cy.wait(2000);

        cy.get('button[title="Número único de caso (NUC)"] div[class="filter-option-inner-inner"]').type({enter});
        cy.wait(2000);
        // cy.xpath('//ul[@class="dropdown-menu inner show"]//li[a/span[text()="Número único de caso (NUC)"]]').click();

        // cy.get('.dropdown-item').contains('Número único de caso (NUC)').click();
        // cy.xpath("//a[span[contains(text(), 'Designación posicional')]]").click();
        // cy.xpath("//span[@class='text' and text()='Designación posicional']").click();
        // cy.get(this.Selectors.DropDownMenu).contains('Número único de caso (NUC)')
        // .click();
        // cy.get('div.flex > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type('Numero unico de caso (NUC){enter}')
    }

    tribunalDropdown()
    {
        cy.get(this.Selectors.tribunal_dropdown,{timeout:10000}).click();
        
    }
    SelectTribunalOption()
    {
        cy.get(this.Selectors.option_tribunal)
        .scrollIntoView()
        .contains('CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL')
        .click();
    }
    MateriaDropdown()
    {
        cy.xpath(this.Selectors.materia_dropdown).click();
    }
    AsuntoDropdown()
    {
        cy.xpath(this.Selectors.asunto_dropdown,{timeout:10000}).click();
        cy.xpath(this.Selectors.search_Asunto)
        .type("DEMANDA CIVIL")
        cy.xpath(this.Selectors.select_asunto)
        .click();
        cy.wait(3000);
    }
    SelectMateriaOption()
    {
        cy.xpath(this.Selectors.option_Materia)
        .scrollIntoView()
        .contains('CIVIL')
        .click();
    }
    ClickOnFecha()
    {
        cy.get(this.Selectors.Fecha_date_container)
        .click();
    }
    SelectFechaDate()
    {
        // cy.xpath(this.Selectors.Date_selected)
        // .contains('10')
        cy.get(this.Selectors.oneDateSelected)
        .dblclick();
        cy.wait(5000)
    }
    ClickOnSearchIcon()
    {
        cy.xpath(this.Selectors.searchIcon)
        .scrollIntoView()
        .click();
        cy.wait(6000);
    }
    TramitesElements()
    {
        cy.wait(8000)
        cy.xpath(this.Selectors.tblServTramitesElement,{timeout:10000})
        .should('be.visible');
    }
    TramitarButton()
    {
        cy.get(this.Selectors.tramitar_Btn)
        .scrollIntoView()
        .should('be.visible');

    }
    ClickTramitarIcon()
    {
        cy.get(this.Selectors.tramitar_container)
        .scrollIntoView()
        .contains('NUC: 2025-0080495');
    
    }
    ClickOnTramitarButton()
    {
        cy.get(this.Selectors.tramitar_buttton)
        .invoke('removeAttr', 'target')  
        .then(() => {
            cy.wait(4000)
          const href = "https://sgcdev-release.azurewebsites.net/ServiciosSecretarialesV2/Tramitar/M11vNV0zQlQ!P!"; 
          cy.window().then((win) => {
            win.location.href = href; 
              cy.wait(8000)
              });
        });

    }
    ValidateEditPage()
    {
        cy.get(this.Selectors.EditorPageValidate)
        .contains('NUC: 2025-0080495');
    }
    ClickOnSiguiente()
    {
        cy.get('#mdlInfoTramite')
        .scrollTo(0,1000);
        cy.get(this.Selectors.siguienteBtn)
        .contains('Siguiente ').click();

    }
    PartePageValidate()
    {
        cy.wait(2000);
        cy.xpath(this.Selectors.PartePage)
        .should('include.text','Partes del trámite')
    }
    ClickonEdit_btn()
    {
        cy.wait(2000);
        cy.xpath(this.Selectors.Edit_btn,{timeout:10000})
        .click();
    }
    Registro_page()
    {
        cy.wait(2000);
        cy.xpath(this.Selectors.RegistroPageVadite)
        .should('have.text','Registro de parte')
    }
    TipoDropdown()
    {
        cy.wait(2000);
        cy.get(this.Selectors.Tipo_Calidad)
        .click();
    }
    SelectTipoCildad_option()
    {
        cy.wait(2000);
        cy.xpath(this.Selectors.select_ele_tipo_calidad)
        .contains('Imputado')
        .click()
    }
    Tipo_de_notificion_dropdown()
    {
        cy.wait(2000)
        cy.xpath(this.Selectors.Tiop_de_notificion)
        .scrollIntoView()
        .click();
        cy.xpath(this.Selectors.tipo_option_select)
        .scrollIntoView()
        .click();
    }
    ClickOnGuardar()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Guardar_btn)
        .click()
    }
    Editor_page_check()
    {
        cy.wait(2000)
        cy.get(this.Selectors.EditorPageValidate)
        .scrollIntoView()
        .should('be.visible');
        cy.wait(2000);
    }
    Estado_dominicano_Validation()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Estado_dominicano_Lawyer)
        .contains('Abogado')
        cy.wait(2000)
        cy.xpath(this.Selectors.Estado_Edit_button)
        .click()
    }
    Verify_the_Tipo_calidad()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Tipo_calidad_dropdown)
        .scrollIntoView()
        .should('be.visible')
        .click()
    }
    See_Tipo_dropdown_menu()
    {
        cy.wait(2000);
        cy.xpath(this.Selectors.tipo_calidad_Menu)
        .should('be.visible')

    }
    Select_option_from_tipoDropdown()
    {
        cy.wait(2000)
        cy.xpath(this.Selectors.Select_Defensor_publico)
        .click();

    }
    Preferencia_drop_down()
    {
        cy.wait(2000)
        cy.get(this.Selectors.preferencia_de_Auidiencia)
        .click()
        cy.xpath(this.Selectors.Select_Preferencia_option)
        .click();
    }
    Datos_Tipo_de_notificia()
    {
        cy.wait(2000)
        cy.get(this.Selectors.tipo_de_notification_datos)
        .scrollIntoView()
        .click()
    }
    Select_Option_datos_tipo_dropdown()
    {
        cy.wait(2000)
        cy.xpath(this.Selectors.select_telematic)
        .click();
    }
    Guadar_btn_click()
    {
        cy.wait(2000)
        cy.xpath(this.Selectors.ClickOnGuardar)
        .scrollIntoView()
        .click();
    }
    verification_Calidad()
    {
        cy.wait(2000);
        cy.get(this.Selectors.Verify_Calidad)
        .should('include.text','Defensor Público');
    }
    // different scenario 

    Close_Cross_Visible()
    {
        cy.wait(2000)
        cy.get(this.Selectors.CloseCrossBtn)
        .should('be.visible')
    }
    Close_the_page()
    {
        cy.wait(2000)
        cy.get(this.Selectors.CloseCrossBtn)
        .click();
    }
    Parte_Button_verification()
    {
        cy.wait(2000)
        cy.get(this.Selectors.parte_btn)
        .should('not.be.disabled');
    }
    ClickOnRegistrarBTN()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Registrar_Parte_btn)
        .click();
    }
    ClickOnTipoparte()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Tipo_parte_Registrar_Page)
        .scrollIntoView()
        .click();
    }
    SelectParte()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Tipo_parte_element)
        .click();

    }
    ClickOnTipoCalidad()
    {
        cy.wait(2000)
        cy.get(this.Selectors.tipo_calidad_registrar_Page)
        .click();
    }
    SearchElementInTipocalidad()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Serach_tipo_calidad)
        .type('parte');
        cy.wait(2000);
        cy.get(this.Selectors.firstElementInTipoCalidad)
        .click();
    }
    Datos_Container_Disabled()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Datos_de_Notifica_Container)
        .scrollIntoView()
        .should('not.have.class','active');
    }
    tipo_de_identificaion_field()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Tipo_de_Identificaion)
        .scrollIntoView()
        .click();
        cy.wait(2000)
        cy.get(this.Selectors.Cedula_Select)
        .click();

    }
    identificaion_field()
    {
        cy.wait(2000)
        cy.get(this.Selectors.IdentificainSearchBox)
        .click().type('00000000002');
        cy.get(this.Selectors.SearchBtnforidentificaion)
        .click();
    }
    PreferenciaDropdown()
    {
        cy.wait(2000);
        cy.get(this.Selectors.Preferencia_de_AudienciaDropdown)
        .scrollIntoView()
        .click();
        cy.wait(2000)
        cy.get(this.Selectors.Select_virtual_option)
        .should('have.text','Virtual')
        .click();
    }
    Duplicato_pOp()
    {
        cy.wait(2000)
        if(cy.get(this.Selectors.Pop_verification_duplicate))
        {
            // cy.get(this.Selectors.Information_pop)
            // .contains('Información')
            // cy.get(this.Selectors.Pop_confirm)
            // .click();
            cy.get(this.Selectors.Pop_verification_duplicate)
            .contains('Duplicado')
            cy.get(this.Selectors.Pop_confirm)
            .click();
            

        }
        else
        {
            // cy.get(this.Selectors.Pop_verification_duplicate)
            // .contains('Duplicado')
            // cy.get(this.Selectors.Pop_confirm)
            // .click();
            cy.get(this.Selectors.Information_pop)
            .contains('Información')
            cy.get(this.Selectors.Pop_confirm)
            .click();
            
        } 
    }
    CloseTheWindowpage()
    {
        cy.wait(2000)
        cy.get(this.Selectors.close_registro_page)
        .click()
    }

    // new Flow or scenario

    Documento_section()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Documento_btn)
        .should('to.be.visible')
        .click()
    }
    Select_tribunal_dropdown()
    {
        cy.get(this.Selectors.option_tribunal)
        .scrollIntoView()
        .contains('CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL')
        .click();
    }
    ClickOnFeach_datePicker()
    {
        cy.get(this.Selectors.Fecha_date_container)
        .click();
        cy.wait(2000);
        
        // cy.wait(2000)
        // cy.get(this.Selectors.Month_change)
        // .click()
        // cy.wait(2000);
    }
    Select_date_enero()
    {
        cy.get(this.Selectors.select_date_for_third)
        .dblclick();
        cy.wait(5000);
        
    }
    ClickOn_Tramitar_btn()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Tramitar_btn_0)
        .scrollIntoView().invoke('removeAttr', 'target')  
        .then(() => {
            cy.wait(4000)
          const href = "https://sgcdev-release.azurewebsites.net/ServiciosSecretarialesV2/Tramitar/MkUzVFczQlQ!P!"; 
          cy.window().then((win) => {
            win.location.href = href; 
              cy.wait(8000)
              });
        });
    }
    Click_on_moreOption_btn()
    {
        cy.wait(6000);
        cy.get(this.Selectors.More_option)
        .should('be.visible')
        .click();
    }
    ClickOn_Editar()
    {
        cy.wait(2000)
        cy.xpath(this.Selectors.Select_Editar)
        .scrollIntoView()
        .click();
    }
    Editar_Documento_POP()
    {
        cy.wait(2000);
        cy.get(this.Selectors.Editar_Documento_pop)
        .should('have.text','Editar Documento')
    }
    Tipo_de_depositente_Filed()
    {
        cy.wait(2000)
        cy.get(this.Selectors.Tipo_de_depositente)
        .click();
        cy.wait(4000)
        // cy.get('.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > div.dropdown-menu > div.inner')
        // .scrollIntoView()
        // .contains('')
        // cy.wait(4000)
        // cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(5) > .dropdown-item > .text').trigger('mouseover')  // Simulate a mouseover event
        // .trigger('click');
        // cy.wait(4000)

        // cy.wait(2000)
        // cy.get(this.Selectors.Search_Box_tipodeDeppositente)
        // .click().type("Parte no involucrada").click()
        // cy.xpath('//span[contains(@class, "text") and normalize-space(text())="Parte no involucrada"]')
        // .trigger('click');


        // cy.wait(2000)
        // cy.get(this.Selectors.Select_option_from_tipodedepositente)
        // .should('be.visible')
        // cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item').click();
        // cy.wait(2000);
    }
    FIll_Representate()
    {
        cy.wait(2000);
        cy.get(this.Selectors.Representrate)
        .click();
        cy.wait(2000)
        cy.get(this.Selectors.Representrate_Option)
        .click();
        cy.wait(2000)
        cy.get(this.Selectors.close_Representrate_field)
        .click();

    }
    Depentante_Field()
    {
        cy.wait(2000);
        cy.get(this.Selectors.Depentante)
        .click();
    }

    Depentante_Field_tipo()
    {
        // cy.get('#frmEditarDocumento > .space-y-2 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn').click()
        // cy.wait(4000)
        // cy.get('#frmEditarDocumento > .space-y-2 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').click().type('Solicitud de fijacion de audiencia')
        cy.get('.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > .btn').click();
        cy.wait(2000)
        cy.get('.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').click().type('Parte no involucrada');
        // cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item > .text').click()
        cy.xpath('(//*[text()="Parte no involucrada"])[4]').scrollIntoView().click().wait(4000);
        // cy.xpath('//*[@class="dropdown-item active"]').click()
        // cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(5) > .dropdown-item > .text').click();
        // cy.get('#editarDepositante > .inputWrap > .form-group > .dropdown > .dropdown-toggle').click();
        // cy.get(".dropdown-menu").contains("Parte no involucrada").click();
        // cy.xpath('(//*[text()="Parte no involucrada"])[4]')
        // .scrollIntoView().invoke('removeAttr', 'target')  
        // .then(() => {
        //     cy.wait(4000)
        //   const href = "https://sgcdev-release.azurewebsites.net/sgcCasos/GetDepositantes?IdDocumento=14241582&IdCalidad=10"; 
        //   cy.window().then((win) => {
        //     win.location.href = href; 
        //       cy.wait(8000)
        //       });
        // });

    }
    //New scenario

    // Tipo_de_depositente_11()
    // {
    //     cy.wait(2000)
    //     cy.get('.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > .btn')
    //     .click();
    //     cy.wait(2000)
    //     // cy.contains('Demandante').click()
    //     // cy.intercept('GET', '/sgcCasos/GetDepositantes*').as('getDepositantes');
    //     cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(3) > .dropdown-item > .text').should('be.visible');
    //     cy.wait(20000);
    //     cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(3) > .dropdown-item > .text').should('be.visible').click();
    // }
    Tipo_de_depositente_11() {
        // Intercept the network request that retrieves depositantes data
        cy.intercept('GET', '/sgcCasos/GetDepositantes*').as('getDepositantes');
      
        // Click the dropdown button
        cy.get('.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > .btn').click();
        // cy.xpath('//*[@id="frmEditarDocumento"]/div[1]/div[3]/div/div/div/div/div[2]/input').type('Depositante')
        cy.xpath('//*[@class="dropdown-menu inner show"]/li/a/span[2][text()="Depositante"]').click()
        cy.wait(10000)
      
        // Wait for the API request to complete before interacting with the dropdown menu
        // cy.wait('@getDepositantes');
      
        // Ensure the dropdown item is visible before clicking it
        // cy.get('.form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(3) > .dropdown-item > .text')
        //   .should('be.visible')
        //   .click();
      }
    //   ssv_12
    // 
Dropdown_Tipo_Depositentate()
{
    cy.get('.space-y-2 > :nth-child(3) > .inputWrap > .form-group > .dropdown > .btn', {timeout: 10000}).should('be.visible').click();
}

Select_Demendando()
{
    cy.get('.inputWrap > .form-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(2) > .dropdown-item > .text', {timeout: 10000}).should('be.visible').click();
    cy.wait('@apiRequest');
}

Error_handle()
{
    cy.get('#frmEditarDocumento > .space-y-2 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > .btn', {timeout: 10000}).should('be.visible').click();
    cy.get('#frmEditarDocumento > .space-y-2 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control', {timeout: 10000}).should('be.visible').click().type('Sele');
    cy.get('.space-y-2 > :nth-child(1) > .inputWrap > .mt-1 > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.selected > .dropdown-item > .text', {timeout: 10000}).should('be.visible').click();
}

btnmdlEditarTramite()
{
    cy.get(this.Selectors.tramita_btn, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.window_tramitar, {timeout: 10000}).should('be.visible').scrollTo(0, 1000);
}

Categoría_Tribunal()
{
    cy.get(this.Selectors.Categoría_Tribunal_de_Origen, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Categoría_option, {timeout: 10000}).should('be.visible').click();
}

DepartamentoJudicial()
{
    cy.get(this.Selectors.Distrito_Judicial, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Distrito_Judicial_option, {timeout: 10000}).should('be.visible').click();
}

ClickOnSiguienteBtn()
{
    cy.get(this.Selectors.siguienteBtn, {timeout: 10000}).should('be.visible').scrollIntoView().click();
}

CrearNuevoDocumento()
{
    cy.get(this.Selectors.Nuevo_Documento_btn, {timeout: 10000}).should('be.visible').click();
}

Cargar_Documento_Page()
{
    cy.get(this.Selectors.Cargar_Documento, {timeout: 10000}).should('have.text', 'Cargar Documento').should('be.visible');
}

Tipo_de_Cargar_dropDown()
{
    cy.get(this.Selectors.Tipo_de_Cargar, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Documentos_option, {timeout: 10000}).should('be.visible').click();
}

Tipo_de_Documentoo_dropdown()
{
    cy.get(this.Selectors.Tipo_de_Documentoo, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Tipo_de_documentoo_option, {timeout: 10000}).should('be.visible').click();
}

Cargar_Documento_Upload()
{
    // cy.get(this.Selectors.Cargar_Documento_Upload_Field, {timeout: 10000}).should('be.visible').click();
    // cy.get(this.Selectors.Cargar_Documento_Upload_Field, {timeout: 10000}).should('be.visible').selectFile('cypress/fixtures/Documentoo.pdf');
    cy.wait(10000);
    cy.get('#expediente-digital-entrada-documento-formulario-Archivo')  // Use the file input ID
      .attachFile('Documentoo.pdf', { force: true }); 
    // cy.get(this.Selectors.Cargar_Documento_Upload_Field, {timeout: 10000})
    //   .should('be.visible') 
    //   .selectFile("C:\\Users\\USER\\Downloads\\Sprint Guide for Loan Application.pdf") 
    //   .should((input) => {
    //     expect(input[0].files[0].name).to.equal('Sprint Guide for Loan Application.pdf');
    //   });
    // cy.get('#lblFileUpload')
    //   .should('have.text', 'Archivo seleccionado: Documentoo.pdf');  
}

select_Fecha_del_documento()
{
    cy.get(this.Selectors.Fecha_Select, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Select_fecha, {timeout: 10000}).should('be.visible').click();
}

Tipo_de_Depositante_drop()
{
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Tribunal');
    cy.get(this.Selectors.Tipo_de_Depositante_Select, {timeout: 10000}).should('be.visible').click();
}

Depositenate_field_Doc()
{
    cy.get(this.Selectors.Depositante_Field_DropDown_doc, {timeout: 10000}).should('be.visible').click();
}

click_On_guardar_btn_document()
{
    cy.wait(5000)
    cy.get(this.Selectors.Guardar_btn_doc, {timeout: 10000}).should('be.visible').click();
    cy.wait(6000);
}

Ok_btn_confirmed_pop()
{
    cy.wait(8000);
    cy.get(this.Selectors.Ok_btn_confirm, {timeout: 10000}).should('be.visible').click();
    cy.wait(6000)
}

Finalizar_Btn()
{
    cy.get(this.Selectors.Finalizar, {timeout: 10000}).should('be.visible').click();
    cy.wait(8000);
}
//ssv2_29
Tipo_de_Depositante_drop_ssv2_20()
{
    cy.wait(3000);
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss,{timeout:10000}).click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Demandante');
    cy.wait(2000)
    cy.get(this.Selectors.Tipo_de_Depositante_drop_29_select,{timeout:10000}).click();
    cy.wait(2000);
}
Select_Depositante_20()
{
    cy.wait(2000);
    cy.get(this.Selectors.Tipo_de_Depositante_drop_29_select,{timeout:10000}).click();
    cy.wait(4000);
}
Tipo_de_depositante_21()
{
    cy.wait(3000)
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss, {timeout: 10000}).should('be.visible').click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Demandado');
    cy.wait(3000);
    cy.get(this.Selectors.Tipo_de_Depositante_drop_21_select,{timeout:10000}).click();
    cy.wait(4000);

}
Tipo_de_depositante_22()
{
    cy.wait(3000);
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss,{timeout:10000}).click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Participante');
    cy.wait(2000)
    cy.get(this.Selectors.Tipo_de_Depositante_drop_29_select,{timeout:10000}).click();
    cy.wait(2000);
}
Tipo_de_depositante_24()
{
    cy.wait(3000);
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss,{timeout:10000}).click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Parte no involucrada');
    cy.wait(2000)
    cy.get(this.Selectors.Tipo_de_Depositante_drop_29_select,{timeout:10000}).click();
    cy.wait(2000);
    
}
Depositante_Field_DocumentO()
{
    cy.wait(4000);
    cy.get(this.Selectors.Depositante_Field_DropDown_doc,{timeout:10000}).click();
    cy.wait(4000);
    cy.get(this.Selectors.Tipo_de_Depositante_drop_21_select,{timeout:10000}).click();
    cy.wait(4000);
}
Tipo_de_depositante_23()
{
    cy.wait(3000);
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss,{timeout:10000}).click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Representante');
    cy.wait(2000)
    cy.get(this.Selectors.Tipo_de_Depositante_drop_29_select,{timeout:10000}).click();
    cy.wait(2000);
    
}
Tipo_de_depositante_25()
{
    cy.wait(3000);
    cy.get(this.Selectors.Tipo_de_Depositante_fieldss,{timeout:10000}).click();
    cy.get(this.Selectors.Tipo_de_Depositante_Search_box, {timeout: 10000}).should('be.visible').click().type('Componente Tribunal');
    cy.wait(2000)
    cy.get(this.Selectors.Tipo_de_Depositante_drop_29_select,{timeout:10000}).click();
    cy.wait(2000);
    
}
Distrito_Judicial_dropdown()
{
    cy.wait(4000);
    cy.get(this.Selectors.Distrito_Judicial_verify,{timeout:10000})
    .invoke('attr', 'title')
    .should('equal', 'DISTRITO NACIONAL');
    cy.wait(4000);

}
Tribunal_Field_Compare_To_Distrito()
{
    cy.wait(3000);
    cy.get(this.Selectors.Tribunal_Verify_to_Distrito,{timeout:1000})
    .invoke('attr', 'title')
    .should('equal', 'CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DEL DISTRITO NACIONAL');
    cy.wait(5000);

}
Sala_Field_required()
{
    cy.wait(2000);
    // cy.get(this.Selectors.Sala_field)
    // .find('em[style="color:red"]')
    // .should('not.exist'); 
    // cy.wait(2000);
    // cy.get('input[name="sala"]')  // Replace with the actual selector for "Sala"
    // .should('not.have.attr', 'aria-required', 'true')  // Assert it is optional (does not have the 'aria-required' attribute)
    // .find('em[style="color:red"]')  // Check for the red asterisk
    // .should('not.exist');
    // Check "Sala" field is optional (does not have 'aria-required="true"')
cy.get('label[for="expediente-digital-entrada-documento-formulario-IdCargarSala"]')  // Select the label for "Sala"
.next()  // Traverse to the input field associated with the label
.should('not.have.attr', 'aria-required', 'true')  // Assert it is optional (does not have the 'aria-required' attribute)
.find('em[style="color:red"]')  // Check for the red asterisk
.should('not.exist');  // Ensure the asterisk is not present

}
}
export default new ServicoiosSecretarialsV2Page();





































































