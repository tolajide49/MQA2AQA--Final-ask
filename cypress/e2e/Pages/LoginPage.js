class loginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    setUsername() {
      cy.get('#user-name').clear().type('standard_user');
    }
  
    setPassword() {
      cy.get('#password').type('secret_sauce');
    }
  
    clickLoginButton() {
      cy.get('#login-button').click();
    }
  
    verifySuccessfulLogin() {
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }
  
    openMenu() {
      cy.get('#react-burger-menu-btn').click();
    }
  
    clickLogoutLink() {
      cy.get('#logout_sidebar_link').should('be.visible').click();
    }
  }
  
  export default new loginPage();
  