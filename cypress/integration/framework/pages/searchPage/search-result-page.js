export class SearchResultPage{
    /**
     * Search result page with listing of ads
     */

    constructor(){
        cy.get('.listing__items img').should('be.visible')
    }

    static getResultListing(){
        /**
         * Get search result ads elements
         */
        return cy.get('.listing-item__wrap ')
    }

}