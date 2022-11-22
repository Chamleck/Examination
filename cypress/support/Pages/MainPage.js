import BasePage from "./BasePage";

class MainPage extends BasePage{
    getProduct(productName){
        return cy.get(`mat-card:contains(${productName})`)
        .find('.mat-button-wrapper')
        
    }

    getChartBtn(){
        return cy.get('button:contains("Your Basket")');
    }

    addProductToChart(productName){
        cy.log(`**Adding product ${productName} to chart**`);
        this.getProduct(productName).click();
        cy.log(`**Clicking on Chart button **`);
        this.getChartBtn().click();
    }

}

export default new MainPage();