class ServicesV2 {

    get cargarDocumentoPage(){return cy.xpath('//*[text()="Cargar Documento"]')}
    get tipoDeDocumento(){return cy.get('#select2-expediente-digital-entrada-documento-formulario-IdTipoDocumento-container')}
    get tribunal() { return cy.get('[data-id="cbTribunal"]') }
    get sala() { return cy.get('[data-id="cbsalaF"]') }
    get tipoDeCargaField(){return cy.get('#select2-expediente-digital-entrada-documento-formulario-IdTipoCarga-container')}
    get searchCarger(){return cy.xpath('/html/body/span/span/span[1]/input')}
    get elementHilighted(){return cy.get('.select2-results__option.select2-results__option--highlighted')}


    moduleClick(moduleN) {
        cy.contains('.nav-item', moduleN).scrollIntoView().click()
    }

    selectTribunalSSV2(data) {
        this.tribunal.click()
        cy.xpath('//*[@id="ContendedorBusquedas"]/div/div[1]/div/div/div/div/div[2]/input').type(data)
        cy.xpath('//*[@class="dropdown-item active"]/span').click()
    }

    selectSalaSSV2(data) {
        this.sala.click()
        cy.xpath('//*[@id="ContendedorBusquedas"]/div/div[3]/div/div/div/div/div[2]/input').type(data)
        cy.xpath('//*[@class="dropdown-item active"]/span').click()
    }
    selectDate(date, month, year) {
        cy.xpath("/html/body/div[9]/div[1]/div/div/select").select(month)
        cy.xpath('/html/body/div[9]/div[1]/div/div/div/input').clear().type(year)
        cy.xpath('(//*[@class="dayContainer"]/span[@aria-label="' + month + ' ' + date + ', ' + year + '"])[1]').dblclick()
    }
    verifyNUC(data) {
        cy.xpath('(//*[text()="NUC: ' + data + '"])[1]').scrollIntoView().should('be.visible')
    }
    clickTramiteIcon() {
        cy.urlRedirect()
        cy.wait(3000)
        cy.xpath('//*[text()="No. Trámite: 2025-0000111-078"]/../../../../div[7]/span').should('be.visible').click()
    }

    clickOnDocumentos(){
        cy.xpath('//*[text()="Documentos"]').click()
    }
    clickOnCargar(){
        cy.get('#btnCargar').click()
    }
    verifyCargarDocumentoPage(){
        this.cargarDocumentoPage.should('be.visible')
    }

    searchCargerElement(data){
        this.searchCarger.type(data)
        cy.wait(3000)
        this.elementHilighted.click()
    }

    selectTipoDeCarga(){
        this.tipoDeCargaField.click()
        this.searchCargerElement('Documento')
    }
    selectTipoDeDocumento(){
        this.tipoDeDocumento.click()
        this.searchCargerElement('Acta de arresto')
        
    }



}
export default new ServicesV2()