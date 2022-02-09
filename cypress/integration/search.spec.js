const { MainPage } = require("./framework/pages/mainPage/main-page");
const { SearchResultPage } = require("./framework/pages/searchPage/search-result-page");

describe('Test Suite: Search by criteria', () => {

    beforeEach('Open main page', () => {

        cy.log('Open main page');
        cy.visit("/");

    });

    it('Check cars by price', () => {
    
        cy.log('Select car model');
        const mainPage = new MainPage()
        mainPage.selectMark('BMW');

        cy.log('Select car price');
        mainPage.selectPrice(5000, 6000, 'BYN')

        cy.log('Search by criteria');
        mainPage.searchButton().click()

        cy.log('Check that results are relevant');
        const searchResultPage = new SearchResultPage()
        let results = searchResultPage.getResultListing()

        results.each(e => {
            cy.get('.listing-item__about .link-text')
                .should('contain.text', 'BMW')
            cy.get('.listing-item__prices > .listing-item__price')
                .then(elem =>{
                    const text = elem.text()
                    cy.log(text)
                })
        })

    });


})