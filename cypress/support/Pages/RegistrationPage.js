import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    getEmailField(){
        return cy.get('#emailControl');
    }

    getPasswordField(){
        return cy.get('#passwordControl');
    }

    getRepeatPasswordField(){
        return cy.get('#repeatPasswordControl');
    }

    getSecurityQuestionSelect(){
        return cy.get('#mat-select-value-3');
    }
// 23 is frist option - 36 is last option
    getOption(option){
        return cy.get(`#mat-option-${option}`);
    }

    getAnswerField(){
        return cy.get('#securityAnswerControl');
    }

    getRegisterBtn(){
        return cy.get('#registerButton');
    }

    //Actions on elements

    fillEmailField(email){
        cy.log(`**Filling email field with ${email}**`);
        this.getEmailField().type(email);
    }

    fillPasswordField(password){
        cy.log(`**Filling password field with ${password}**`)
        this.getPasswordField().type(password);
    }

    fillRepeatPasswordField(password){
        cy.log(`**Filling repeat password field with ${password}**`)
        this.getRepeatPasswordField().type(password);
    }

    selectingQuestionOption(option){
        cy.log(`**Clicking on select of question**`);
        this.getSecurityQuestionSelect().click();
        cy.log(`**Selecting option ${option} **`);
        this.getOption(option).click();
    }

    typeAnswer(answer){
        cy.log(`**typing answer ${answer} **`);
        this.getAnswerField().type(answer);
    }

    clickRegistrationBtn(){
        cy.log(`**clicking registration button**`);
        this.getRegisterBtn().click();
    }

}

export default new RegistrationPage();