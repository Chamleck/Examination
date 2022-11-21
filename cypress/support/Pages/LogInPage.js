import BasePage from "./BasePage";

class LogInPage extends BasePage{

    openLogInPage(){
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/login')
    }
    getRegistrationBtn(){
        return cy.get('[href="#/register"]')
    }

    getEmailField(){
        return cy.get('#email')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getCheckbox(){
        return cy.get('.mat-checkbox-inner-container')
    }

    getLogInBtn(){
        return cy.get('#loginButton')
    }

    getError(){
        return cy.get('.error')
    }

    

    //Actions on elements

    clickRegistrationBtn(){
        cy.log('**Clicking on Registration button**')
        this.getRegistrationBtn().click()
    }

    login(email,password){
        cy.log(`**Adding ${email} to email field**`)
        this.getEmailField().type(email)
        cy.log(`**Adding ${password} to password field**`)
        this.getPasswordField().type(password)
        cy.log(`**activating checkbox**`)
        this.getCheckbox().click()
        cy.log(`**pushing Login button**`)
        this.getLogInBtn().click()
    }

    
}

export default new LogInPage();