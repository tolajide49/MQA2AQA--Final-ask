class ScreenWidthPage{

ScreenWidth() {
    cy.viewport(1059, 768);
}


ElementVisible() {
    cy.get('#user-name', { timeout: 10000 }).should('be.visible');
  
}

UserIsLoggedIn(){
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
}

}

export default new ScreenWidthPage