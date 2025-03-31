class SeguridadPage {
    selectors = {
        seguridadNavLink: '#Seguridad > .nav-link > .pj-montserrat-medium-16',
        usuariosBreadcrumb: '#Usuarios > .card-header > nav > .breadcrumb',
        usuariosSearchBar: '#txtBuscarUsuarios',
        usuariosIcon: '.input-group-text.btnSearch',
        cardTitle: '.card-header > div > .card-title',
        usuariosLink: 'Usuarios',
        searchbar: '.input-group > #txtBuscar',
        SearchBtn: '#btnBuscar',
        Assign: '.nav-link[href="#tabAsignarPermisos"]',
        permisosActuales:'.nav-link[href="#tabPermisosActuales"]',
        dropdownperfil:'.card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .dropdown > .btn',
        perfilOption:':nth-child(1) > :nth-child(1) > :nth-child(1) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item',
        PerfilSearchBox:'.card-body > :nth-child(1) > :nth-child(1) > :nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control',
        DistritoDropDown:':nth-child(2) > :nth-child(1) > :nth-child(1) > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner',
        DropdownSearchBar:'div[class="dropdown-menu show"] input[aria-label="Search"]',
        DistritoOption:':nth-child(2) > :nth-child(1) > :nth-child(1) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li.active > .dropdown-item',
        sededropdown: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .dropdown > .btn',
        Tribunaldropdown: '.btn dropdown-toggle bs-placeholder btn-light'
    };

    Validate() {
        cy.get(this.selectors.seguridadNavLink)
            .scrollIntoView()
            .should('include.text', 'Seguridad');
        
        cy.get(this.selectors.seguridadNavLink)
            .click();
    }

    Avaiable() {
        cy.wait(2000);
        cy.contains(this.selectors.usuariosLink).should('be.visible');
    }

    ClickUsuario() {
        cy.wait(2000);
        cy.contains(this.selectors.usuariosLink).click();
    }

    SearchBar() {
        cy.wait(1000);
        cy.get(this.selectors.usuariosBreadcrumb)
            .should('include.text', 'Usuarios')
            .and('include.text', 'Seguridad');
        
        cy.get(this.selectors.usuariosSearchBar).should('be.visible');
    }

    Addicon() {
        cy.wait(2000);
        cy.get(this.selectors.usuariosIcon).click();
    }

    CheckTitle() {
        cy.wait(2000);
        cy.get(this.selectors.cardTitle)
            .should('have.text', 'Consultar Usuario')
            .and('be.visible');
    }
    searchBarIn()
    {
        cy.get(this.selectors.searchbar).should('be.visible');
    }
    TypeInSearch(Buscar)
    {
        cy.wait(2000);
        cy.get(this.selectors.searchbar)
        .type(Buscar)
        // .type("p39siddatech");
    }
    Search()
    {
        cy.wait(2000);
        cy.get(this.selectors.SearchBtn)
        .click();
    }
    ValidateAssign()
    {
        cy.wait(2000)
        if(cy.get(this.selectors.Assign).should('have.class','active'))
        {
            cy.get(this.selectors.permisosActuales).should('not.have.class','active');
        }
        else
        {
            cy.get(this.selectors.permisosActuales).should('have.class','active');
        }
        // cy.get(this.selectors.Assign).should('have.class','active');
        // cy.get(this.selectors.permisosActuales).should('have.class','active');
    }
    DropDownPerfil(Perfil)
    {
        cy.get(this.selectors.dropdownperfil).click();
        cy.get(this.selectors.PerfilSearchBox).type(Perfil)
        cy.get(this.selectors.perfilOption)
        .click()

    }
    ClickDistrito()
    {
        cy.get(this.selectors.DistritoDropDown).click();
    }
    DropDownDistrito()
    { 
        cy.wait(2000)
        cy.get(this.selectors.DropdownSearchBar).type("AZUA")
        cy.get(this.selectors.DistritoOption)
        .click();
        cy.wait(2000)
        cy.get(this.selectors.DistritoDropDown).click();
        cy.get(this.selectors.DropdownSearchBar).type("BARAHONA")
        cy.get(this.selectors.DistritoOption)
        .click();

        // // cy.get('a[aria-selected="true"]').contains('AZUA').click();
        // cy.wait(2000);
        // cy.get('a.dropdown-item.selected.active')
        // .should('be.visible')
        // .contains('AZUA')
        // .click();   
        } 

    DropdownSede()
    {
        cy.wait(2000)
        cy.get(this.selectors.sededropdown).click()
        cy.get(this.selectors.DropdownSearchBar).type("EDIFICIO PALACIO DE");
        cy.contains('a.dropdown-item',"EDIFICIO PALACIO DE JUSTICIA DE AZUA", { timeout: 10000 }) 
         .should('be.visible') 
         .click();
    }
    DropdownTribunal()
    {
        // cy.get('.dropdown-toggle').click();
        // cy.get('button[data-id="cbTribunal"]').click();
        // cy.wait(2000);
        // cy.get(this.SeguridadPage.Tribunaldropdown).click();
        // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION DE SAN FRANCISCO DE MACORIS")
        // cy.wait(2000);
        // cy.xpath("//span[contains(text(),'CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION ')]")
        //   .should('exist')
        //   .click();
        // cy.wait(2000)
        // cy.get('div[class="dropdown-menu show"]').contains('CAMARA CIVIL Y COMERCIAL DE LA CORTE DE APELACION').click();
        // Use XPath to click on the dropdown option containing the specified text
        // cy.xpath("//a[contains(text(),'CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')]")
        // .click();
        // cy.get('.dropdown-button').click({ force: true }); // Force click to open the dropdown even if it's covered or not visible
        // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE'); // Type the search term into the search bar
        // cy.get('.dropdown-item').should('have.length.greaterThan', 0); // Ensure options are visible
        // cy.get('.dropdown-item').contains('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click({ force: true }); // Force click the option containing the search term
 
        // cy.get('.no-results')
        // cy.get('a[role="option"][aria-selected="false"]').contains('CAMARA PENAL DE LA CORTE DE APELACION DE SAN FRANCISCO DE MACORIS').click({ force: true });
        // cy.get('li')
        //   .find('a.dropdown-item')
        //   .contains('CENTRO DE CITACIONES Y NOTIFICACIONES DE AZUA')
        //   .click({ force: true });
        // cy.get('div[class="dropdown-menu show"]').contains('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE AZUA').click({force: true});
//         cy.intercept('GET', '/api/your-endpoint').as('getDropdownOptions');

// // Perform the action that triggers the dropdown
// cy.wait('@getDropdownOptions');

// // Now interact with the dropdown
// cy.get('.dropdown-item').contains('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE AZUA').click({ force: true });
// cy.get('.dropdown-button').trigger('click', { force: true }); // Trigger the click event manually
// cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dropdown > .dropdown-toggle').click()
// cy.get('#cbTribunal').select('2');
// cy.get('div[class="dropdown bootstrap-select show-tick form-control dropup show"] li:nth-child(1) a:nth-child(1) span:nth-child(2)').click({ force: true }
    // cy.get('div[aria-expanded="true"]').contains('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE AZUA').click();
// // Now ensure the options are visible
// cy.get('.dropdown-menu').should('be.visible');

// // Select the option
// cy.get('.dropdown-item').contains('test').click({ force: true });
    
// cy.get('.btn dropdown-toggle bs-placeholder btn-light').trigger('mouseover');

cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dropdown > .dropdown-toggle > .filter-option > .filter-option-inner > .filter-option-inner-inner').trigger('mouseover').click()
// cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dropdown > .dropdown-toggle > .filter-option > .filter-option-inner > .filter-option-inner-inner').contains('CAMARA CIVIL Y COMERCIAL DEL JUZGADO DE PRIMERA INSTANCIA DE AZUA').click();
cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > :nth-child(1) > .dropdown-item > .text').click();
cy.wait(2000);

    }
        
}

export default new SeguridadPage();
