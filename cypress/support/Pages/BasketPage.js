import BasePage from "./BasePage";

class BasketPage extends BasePage{
    

    getCheckoutBtn(){
        return cy.get('#checkoutButton');
    }



    clickCheckoutBtn(){
        cy.log(`**Clicking checkout button**`);
        this.getCheckoutBtn().click();
    }

}

export default new BasketPage();