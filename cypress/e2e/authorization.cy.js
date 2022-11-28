///<reference types="cypress"/>
import user from '../fixtures/user.json'
import logInPage from '../support/pages/LogInPage';
import mainPage from '../support/Pages/MainPage';
import {loginViaAPI} from '../support/helper';

let badCreds = {
    email: "11111",
    password: "1111"
}

describe('Authorization', () => {

    it('Login via api',()=>{
        loginViaAPI(user);
    });

    it('negative authorization',()=>{
        logInPage.openLogInPage();
        logInPage.closeDialog();
        logInPage.login(badCreds.email,badCreds.password);
        logInPage.getError().should('exist')
    });

    

    it('positive authorization',()=>{
        logInPage.openLogInPage();
        logInPage.closeDialog();
        logInPage.login(user.email,user.password);
        mainPage.getToolBar().should('contain', " Your Basket")
        .then(()=>{expect(window.localStorage.getItem('token')).to.exist});
        cy.visit('http://juice-shop-sanitarskyi.herokuapp.com');
    });



})
