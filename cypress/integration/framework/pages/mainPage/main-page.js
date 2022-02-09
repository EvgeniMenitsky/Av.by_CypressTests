import { markSelectbox, searchButton } from "./locators";

export class MainPage {
    /**
     * Main page for av.by
     */

    constructor(){
        cy.get('.index-wrapper__main').should('be.visible');
    }

    
    static searchButton = () => cy.get(searchButton)

    static selectMark(name){
        /**
         * Select mark of car for search
         * @param {String} name - mark name
         */
        cy.get(markSelectbox)
            .click()
            .next()
            .find(`li > button[data-item-label="${name}"]`)
            .click()
    }

    static selectPrice(from, to, currency){
        /**
         * Select price area for car search
         * @param from - start area price
         * @param to - finish area price 
         * 
         */
        cy.get('span')
            .contains('Валюта')
            .click()

        cy.get('ul')
            .find(`li > button[data-item-label="${currency}"]`)
            .click()

        cy.get(`input[data-property-name="price_${currency.toLowerCase()}"]`)
            .first()
            .type(from)

        cy.get(`input[data-property-name="price_${currency.toLowerCase()}"]`)
            .last()
            .type(to)

        cy.wait(2000)
    }

}