import BasePage from "./BasePage";

class PaymentPage extends BasePage{

    getDropdownTriger(){
        return cy.get('mat-panel-description:contains("Add a credit or debit card")');
    }
    
    getNameField(){
        return cy.get('[aria-required="true"]').eq(0);
    }

    getCardField(){
        return cy.get('[aria-required="true"]').eq(1);
    }

    getMonthSelect(){
        return cy.get('[aria-required="true"]').eq(2);
    }

    getExpireYearSelect(){
        return cy.get('[aria-required="true"]').eq(3);
    }

    getSubmitBtn(){
        return cy.get('#submitButton');
    }

    getRadioBtn(){
        return cy.get('.mat-radio-outer-circle').eq(0);
    }

    getContinueBtn(){
        return cy.get('[aria-label="Proceed to review"]');
    }

    getMessage(){
        return cy.get('.mat-simple-snack-bar-content');
    }

    getCheckoutBtn(){
        return cy.get('#checkoutButton');
    }

    getConfirmation(){
        return cy.get('div.confirmation').eq(0);
    }

    

    //Actions on elements

    submitPaymentForm(name,card,month,year){
        cy.wait(1000);
        cy.exist('.mat-radio-outer-circle').then(exists => {
            
            if (exists) {
            cy.log(`**clicking radio btn**`);
            this.getRadioBtn().click({force:true});
            cy.log(`**Clicking continue btn**`);
            this.getContinueBtn().click();
            cy.log(`**Clicking checkout btn**`);
            this.getCheckoutBtn().click();


            } else {

        cy.log(`**opening dropdown**`);
        this.getDropdownTriger().click();
        cy.log(`**Typing ${name} in name field**`);
        this.getNameField().type(name);
        cy.log(`**Typing ${card} in card field**`);
        this.getCardField().type(card);
        cy.log(`**selecting ${month} in month selector**`)
        this.getMonthSelect().select(month);
        cy.log(`**selecting ${year} in year selector**`)
        this.getExpireYearSelect().select(year);
        cy.log(`**pushing submit btn**`);
        this.getSubmitBtn().click();
        cy.log(`**Assertion that payment method added**`);
        this.getMessage().should('include.text', "3467");
        cy.log(`**clicking radio btn**`);
        this.getRadioBtn().click({force:true});
        cy.log(`**Clicking continue btn**`);
        this.getContinueBtn().click();
        cy.log(`**Clicking checkout btn**`);
        this.getCheckoutBtn().click();


        }

    })

    }
      
}

export default new PaymentPage();