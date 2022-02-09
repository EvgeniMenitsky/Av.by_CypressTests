import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import { MainPage } from '../framework/pages/mainPage/main-page';
import { SearchResultPage } from '../framework/pages/searchPage/search-result-page';


Given(`I open main page`, () => {
    cy.log('Open main page');
    cy.visit("/");
})

When('I select {string} model', (model) => {
    MainPage.selectMark(model);
})


And('I select price from {int} to {int} in currency {string}', (from, to, cyrrency) =>{
    MainPage.selectPrice(from, to, cyrrency)
    
})

And('I click search button', ()=>{
    MainPage.searchButton().click()
})

Then('I check that all ads have {string} title', (model) => {
    let results = SearchResultPage.getResultListing()

    results.each(e => {
        cy.get('.listing-item__about .link-text')
            .should('contain.text', model)

        
        cy.get('.listing-item__prices > .listing-item__price')
            .then(elem =>{
                const text = elem.text()
                cy.log(text)
            })
    })
})