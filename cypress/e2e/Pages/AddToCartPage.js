class CartPage {

         ItemtoCart(){
cy.get('.inventory_item').first().find('.btn_inventory').click();
 }

    openCart() {
      cy.get('.shopping_cart_link').click();
    }



  
 verifyCartItem(itemName, itemPrice) {
    cy.get('.cart_item').should('have.length.gt', 0).each(($item) => {
    cy.wrap($item).find('.inventory_item_name').invoke('text').then((cartItemName) => {
    cy.wrap($item).find('.inventory_item_price').invoke('text').then((cartItemPrice) => {
    cy.get('.inventory_item_name').contains(cartItemName.trim()).should('exist');
    cy.get('.inventory_item_price').contains(cartItemPrice.trim()).should('exist');
        });
      });
    });
  }
  
    checkoutButtonShouldBeEnabled() {
    cy.get('#checkout').should('be.enabled');
    }
  }
  
  export default new CartPage();
  