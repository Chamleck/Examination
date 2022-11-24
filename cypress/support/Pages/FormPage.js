import BasePage from "./BasePage";

class FormPage extends BasePage{

    openForm(){
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact')
    }
    



    getEmailField(){
        return cy.get('.mat-form-field-infix.ng-tns-c119-7');
    }

    getCommentField(){
        return cy.get('#comment');
    }

    getSlider(){
        return cy.get('#rating');
    }

    getResultField(){
        return cy.get('[aria-label="Field for the result of the CAPTCHA code"]');
    }

    getSubmitBtn(){
        return cy.get('#submitButton');
    }

    getCaptchaCode(){
        return cy.get('code').then(($code)=>{
            //за допомогою команди .text() отримуємо текст з тегу, який під аліас $code
             return $code.text()
        })
    }

    getDismissBtn(){
        return cy.get('.close-dialog');
    }

    getThankYouMsg(){
        return cy.get('span:contains("Thank you for your feedback.")');
    }

    

    //Actions on elements

    submitForm(comment){
        cy.log('**opening form page**')
        this.openForm();
        cy.log('**Closing diolog window**')
        this.getDismissBtn().click();
        cy.log(`**Typing ${comment} to comment field**`);
        this.getCommentField().type(comment);
        cy.log(`**selecting rating**`);
        this.getSlider().click();
        cy.log('**Calculating captcha code**');
        //тут резолв промісу буде result
        this.getCaptchaCode().then(result => {
             cy.window().then((w) => {
                const sum = w.eval(result);
                cy.log('**entering result to resi+ult field**');
                this.getResultField().type(sum);
                cy.log('**submitting the form**');
                this.getSubmitBtn().click();


              })
          })
       
    }

}

export default new FormPage();