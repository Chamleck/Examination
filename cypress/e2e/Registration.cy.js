///<reference types="cypress"/>
import mainPage from '../support/pages/MainPage';
import logInPage from '../support/pages/LogInPage';
import registrationPage from '../support/pages/RegistrationPage';
import {faker} from '@faker-js/faker';

let form = {
  answer: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(20),
  option: faker.datatype.number({min: 3 , max: 16})
}

describe('Registration test', () => {

  it('Proceeding to registration', () => {
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/');
    mainPage.closeDialog();
    mainPage.clickAccountBtn();
    mainPage.clickLogInBtn();
    logInPage.clickRegistrationBtn();
  })

  it('Submiting the from',()=>{
    registrationPage.fillEmailField(form.email);
    registrationPage.fillPasswordField(form.password);
    registrationPage.fillRepeatPasswordField(form.password);
    registrationPage.selectingQuestionOption(form.option);
    registrationPage.typeAnswer(form.answer);
    registrationPage.clickRegistrationBtn();
    cy.get('[href="#/register"]',{timeout:2000})
    cy.location().then(location=>{
      //перевірка локейшн (урл)
      expect(location.href).to.eq('http://juice-shop-sanitarskyi.herokuapp.com/#/login');
  })
  })
})