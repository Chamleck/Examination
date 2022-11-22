///<reference types="cypress"/>
import basketPage from '../support/Pages/BasketPage';
import adressPage from '../support/Pages/AdressPage';
import logInPage from '../support/pages/LogInPage';
import mainPage from '../support/Pages/MainPage';
import user from '../fixtures/user.json';
import {loginViaAPI} from '../support/helper';
import {faker} from '@faker-js/faker';



let form = {
    name: faker.name.firstName(),
    country: faker.address.country(),
    adress: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    state: faker.animal.fish(),
    number: faker.phone.number()
  }

describe('Test of Placing an order', () => {

    
    beforeEach(() => {
        loginViaAPI(user);
    });
    

    it('positive authorization',()=>{
        logInPage.openLogInPage();
        logInPage.closeDialog();
        logInPage.login(user.email,user.password);
        mainPage.getToolBar().should('contain', " Your Basket")
        .then(()=>{expect(window.localStorage.getItem('token')).to.exist});
    });

    it('adding product to basket, proceeding to order submit',()=>{
        cy.get(`mat-card`,{timeout:2000})
        mainPage.addProductToChart('Banana Juice (1000ml)');
        cy.get('#checkoutButton',{timeout:2000});
        basketPage.clickCheckoutBtn();
    });

    it('Adding adress if neccessary',()=>{
        adressPage.submitAdressForm(form.country,form.name,form.number,form.zip,form.adress,form.city,form.state);
    });



})