export default class BasePage {

    getAccountBtn(){
        return cy.get('#navbarAccount')
    }

    getLogInBtn(){
        return cy.get('#mat-menu-panel-0')
    }

    getDismissBtn(){
        return cy.get('.close-dialog')
    }

    getToolBar(){
        return cy.get('mat-toolbar')
    }

     //Actions on elements
     clickAccountBtn(){
         cy.log('**Clicking account button**')
         this.getAccountBtn().click()
     }

     clickLogInBtn(){
        cy.log('**Clicking login button**')
        this.getLogInBtn().click()
    }

    closeDialog(){
        cy.log('**Closing diolog window**')
        this.getDismissBtn().click()
    }
 
 
 }