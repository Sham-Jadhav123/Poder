class SeguridadModulePage {
    titleP = '¡Le damos la bienvenida!'
    asignarP = '//*[@id="DivDatoUsuario"]/div[1]/ul/li[1]/a'
    permisosA = '//*[@id="DivDatoUsuario"]/div[1]/ul/li[2]/a'

    perfile='//*[@data-id="cbPerfil"]'
    sede='//*[@data-id="cbSede"]'
    distrito='//*[@data-id="cbDistritoJudicial"]'
    tribunal='//*[@data-id="cbTribunal"]'
    sala='//*[@data-id="cbSala"]'

    titlePage() {
        cy.wait(3000)
        cy.contains(this.titleP).should('be.visible')
    }
    moduleClick() {
        cy.contains('.nav-item', 'Seguridad').scrollIntoView().click()
    }

    usuariosCard() {
        cy.contains('Usuarios').should('be.visible').click()
    }
    userList() {
        cy.get('#tblUsuario').should('be.visible')
    }
    searchUser() {
        cy.get('#txtBuscarUsuarios').type('adrubio@poderjudicial.gob.do')
    }

    editIcon() {
        cy.get('#btnEditar').click()
    }

    asignarPermisos() {
        cy.xpath(this.asignarP).click()
            .should('have.class', 'active')
            .and('be.visible')
    }

    permisosActuales() {
        cy.xpath(this.permisosA).click()
            .should('have.class', 'active')
            .and('be.visible')
    }

    validateAllCard() {
        cy.wait(3000)
        cy.contains('Usuarios').should('be.visible')
        cy.contains('Perfiles de acceso').should('be.visible')
        cy.contains('Registros de auditoría').should('be.visible')
        cy.contains('Informes de seguridad').should('be.visible')
        cy.contains('Informes de seguridad').should('be.visible')
    }

    guardarClick(){
        cy.xpath('//*[@onclick="AgregarrDatoUsuario()" and text()="GUARDAR"]').should('be.visible').click()
    }

    selectPerfile(){
        cy.xpath(this.perfile).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[1]/div/div/div/div[2]/input').type('Perfil CAT')
        cy.contains('.dropdown-item.active','Perfil CAT').click()
    }
    selectSede(){
        cy.xpath(this.sede).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[1]/div[2]/div/div/div/div[2]/input').type('EDIFICIO JUZGADO DE PAZ DE LAS YAYAS')
        cy.contains('.dropdown-item.active','EDIFICIO JUZGADO DE PAZ DE LAS YAYAS').click()
    }
    selectDistrito(){
        cy.xpath(this.distrito).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[1]/div/div/div/div[2]/input').type('DUARTE')
        cy.contains('.dropdown-item.active','DUARTE').click()
    }
    selectTribunal(){
        cy.xpath(this.tribunal).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[2]/div[2]/div/div/div/div[2]/input').type('CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
        cy.contains('.dropdown-item.active','CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE').click()
    }
    selectSala(){
        cy.xpath(this.sala).click()
        cy.xpath('//*[@id="tabAsignarPermisos"]/div/div[3]/div/div/div/div/div[2]/input').type('SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
        cy.contains('.dropdown-item.active','SEGUNDA SALA DE LA CAMARA PENAL DEL JUZGADO DE PRIMERA INSTANCIA DE DUARTE')
    }

    editOptionPermisosActual(){
        cy.contains('.d-flex.align-items-center','JUZGADO DE LA INSTRUCCION DE DUARTE').click()
        cy.wait(3000)
        cy.xpath('//span[text()=" - OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE "]/../div/i[@class="la la-edit la-2x yellow"]').click()
        // cy.xpath('//*[@id="tribunal_224"]/li/div/i[1]').click()
        // cy.get('#tribunal_224 > .sala-item > .tools > .la-edit').click()
        // cy.get('#tribunal_248 > .sala-item > .tools > .la-edit').click()
    }
    deleteOptionPermisosActual(){
        cy.contains('.d-flex.align-items-center','JUZGADO DE LA INSTRUCCION DE DUARTE').click()
        cy.wait(3000)
        cy.xpath('//span[text()=" - SEGUNDO JUZGADO DE LA INSTRUCCIÓN DE DUARTE "]/../div/i[@class="la la-trash la-2x text-danger"]').click()
        // cy.get('#tribunal_224 > .sala-item > .tools > .la-trash').click()
    }

    searchPermisos(){
        cy.get('#searchPermisos').type('- OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE')
        cy.contains('.d-flex.align-items-center','- OFICINA JUDICIAL DE SERVICIOS DE ATENCION PERMANENTE DE DUARTE').click()
    }

}
export default new SeguridadModulePage()