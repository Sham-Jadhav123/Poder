class SeguridadRegistrosDAPage{

    card='.card-title-card'
    tabRegistrosdeAuditoria='#aTabAuditLogs'
    seleccionarTiempo='[data-id="filtroTiempo"]'
    searchIconR='#applyFilterBtn'

    clickModule(){
        cy.get(this.card).contains('Registros de auditoría').click()
    }
    clickTabRegistrosdeAuditoria(){
        cy.get(this.tabRegistrosdeAuditoria).click()
    }
    selectFilterSeleccionarTiempo(data){
        cy.get(this.seleccionarTiempo).click()
        cy.xpath('//*[@class="dropdown-menu show"]/div/ul/li/a/span[2][text()="'+data+'"]').click()
    }
    clickSearchIconR(){
        cy.get(this.searchIconR).click()
    }


}
export default new SeguridadRegistrosDAPage()