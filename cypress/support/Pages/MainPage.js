import BasePage from "./BasePage";

class MainPage extends BasePage{
    getProduct(productName){
        return cy.get(`mat-card:contains(${productName})`)
        .find('button')
    }
}

export default new MainPage();