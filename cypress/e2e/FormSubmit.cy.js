///<reference types="cypress"/>
import formPage from '../support/Pages/FormPage';
import {faker} from '@faker-js/faker';

let form = {
    comment: faker.name.firstName()
  }

it('submitting the feedback',()=>{
formPage.submitForm(form.comment);
formPage.getThankYouMsg().should('exist');
})