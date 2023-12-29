class BuyItemCheckout {

    CheckOutButton(){
        cy.get('#checkout').click();
     }

    CheckoutInfo(){
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');}

    ContinueBTN(){
        cy.get('#continue').click();
    }
    CompleteCheckout(){
        cy.get('#finish').click();
    }
    MessageDisplayed(){
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }
}

export default new BuyItemCheckout