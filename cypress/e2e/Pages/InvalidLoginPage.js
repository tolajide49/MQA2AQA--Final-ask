class InvalidLoginPage {

WrongPassword() {
    cy.get('#password').type('wrong_password');
}

VerifyInvalid() {
cy.get('.error-message-container').should('include.text', 'Username and password do not match any user in this service')
}

}

export default new InvalidLoginPage();