import BasePage from "./BasePage";

class LogInPage extends BasePage{
    getRegistrationBtn(){
        return cy.get('[href="#/register"]')
    }

    

    //Actions on elements

    clickRegistrationBtn(){
        cy.log('**Clicking on Registration button**')
        this.getRegistrationBtn().click()
    }

    
}

export default new LogInPage();