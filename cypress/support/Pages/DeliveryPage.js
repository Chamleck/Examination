import BasePage from "./BasePage";

class DeliveryPage extends BasePage{
    



    getRadioBtn(){
        return cy.get('[class="mat-radio-outer-circle"]').eq(2);
    }

    getContinueBtn(){
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }

    

    //Actions on elements

    proceedToPayment(){
        cy.log(`**Clicking radio btn**`);
        this.getRadioBtn().click({force:true});
        cy.log(`**Clicking continue btn**`);
        this.getContinueBtn().click();
    }

}

export default new DeliveryPage();