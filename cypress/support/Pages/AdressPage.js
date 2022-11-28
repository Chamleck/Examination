import BasePage from "./BasePage";

class AdressPage extends BasePage{
    

    getAddAdressBtn(){
        return cy.get('[aria-label="Add a new address"]');
    }

    getCountryField(){
        return cy.get('[placeholder="Please provide a country."]');
    }

    getNameField(){
        return cy.get('[placeholder="Please provide a name."]');
    }

    getMobileNumberField(){
        return cy.get('[placeholder="Please provide a mobile number."]');
    }

    getZipCodeField(){
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }

    getAdressField(){
        return cy.get('[placeholder="Please provide an address."]');
    }

    getCityField(){
        return cy.get('[placeholder="Please provide a city."]');
    }

    getStateField(){
         return cy.get('[placeholder="Please provide a state."]');
    }

    getSubmitBtn(){
        return cy.get('#submitButton');
    }

    getRadioBtn(){
        return cy.get('[class="mat-radio-outer-circle"]').eq(0);
    }

    getContinueBtn(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    getBody(){
        return cy.get('body');
    }

    getAdressBar(){
        return cy.get('mat-row.mat-row');
    }

    

    //Actions on elements

    submitAdressForm(country,name,number,zip,adress,city,state){
        cy.wait(1000);
        cy.exist('.mat-radio-outer-circle').then(exists => {
            
            if (exists) {
                
               //тоді клікаємо по цьому товару
               this.getRadioBtn().click({force:true});
               this.getContinueBtn().click();
            } else {
               //в іншому випадку клікаємо на кнопку яка відповідає за перехід на наступну сторінку
               cy.log(`**Clicking add adress button**`);
               this.getAddAdressBtn().click();
               cy.log(`**Adding ${country} to country field**`);
               this.getCountryField().type(country);
               cy.log(`**Adding ${name} to name field**`);
               this.getNameField().type(name);
               cy.log(`**Adding ${number} to phonenumber field**`);
               this.getMobileNumberField().type(number);
               cy.log(`**Adding ${zip} to zip field**`);
               this.getZipCodeField().type(zip);
               cy.log(`**Adding ${adress} to adress field**`);
               this.getAdressField().type(adress);
               cy.log(`**Adding ${city} to city field**`);
               this.getCityField().type(city);
               cy.log(`**Adding ${state} to state field**`);
               this.getStateField().type(state);
               cy.log(`**Submitting the form**`);
               this.getSubmitBtn().click();
               cy.log(`**Selecting payment method**`);
               this.getRadioBtn().click({force:true});
               cy.log(`**Clicking continue btn**`);
               this.getContinueBtn().click();
               
               
               
            }
      
      
         })


    }



}

export default new AdressPage();