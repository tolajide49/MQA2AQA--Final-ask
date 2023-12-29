class PerforamceGlichUser {
login() {
    cy.loginWithTimeout('performance_glitch_user', 'secret_sauce', 5000); // timeout is 5 seconds
}

UrlPresent() {
cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

}

MenuBtn() {
    cy.get('#react-burger-menu-btn').click();
}


SideBar() {
    cy.get('#logout_sidebar_link').should('be.visible');
  
}

}
export default new PerforamceGlichUser