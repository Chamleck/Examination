import BasePage from "./BasePage";

class MainPage extends BasePage{
    getProduct(productName){
        return cy.get(`mat-card:contains(${productName})`)
        .find('.mat-button-wrapper');
        
    }

    getChartBtn(){
        return cy.get('button:contains("Your Basket")');
    }

    getMessage(){
        return cy.get('.mat-simple-snack-bar-content');
    }

    addProductToChart(productName){
        cy.log(`**Adding product ${productName} to chart**`);
        this.getProduct(productName).click();
        cy.wait(1000);
        cy.log(`**Clicking on Chart button **`);
        this.getChartBtn().click();
    }

}

export default new MainPage();