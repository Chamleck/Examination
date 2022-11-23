///<reference types="cypress"/>
import {faker} from '@faker-js/faker';
import {loginViaAPI,login,productSearch} from '../support/helper';
import user from '../fixtures/user.json';
import basketPage from '../support/Pages/BasketPage';
import adressPage from '../support/Pages/AdressPage';
import deliveryPage from '../support/pages/DeliveryPage';
import paymentPage from '../support/Pages/PaymentPage';
import mainPage from '../support/Pages/MainPage';


let form = {

    name: faker.name.firstName(),
    country: faker.address.country(),
    adress: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: "12345",
    state: faker.animal.fish(),
    number: "2919299497",
    card: {
        card: "1231241252353467",
        month: "7",
        year: "2083"
    }
  }

describe('Test of Placing an with help of search func', () => {

    
    beforeEach(() => {
        cy.restoreLocalStorage()
    });
    
    it('login',()=>{
        login(user);
    })
    

    it('adding product to basket, proceeding to order submit',()=>{
        productSearch('Banana');
        cy.get(`mat-card`,{timeout:2000});
        mainPage.addProductToChart('Banana Juice (1000ml)');
        mainPage.getMessage().should('include.text', "Banana Juice (1000ml)")
        cy.get('.cdk-row',{timeout:4000});
        basketPage.clickCheckoutBtn();
        adressPage.submitAdressForm(form.country,form.name,form.number,form.zip,form.adress,form.city,form.state);
        deliveryPage.proceedToPayment();
        paymentPage.submitPaymentForm(form.name,form.card.card,form.card.month,form.card.year);
        paymentPage.getConfirmation().should('include.text', "Your order will be delivered in 5 days.")
        
    });





})