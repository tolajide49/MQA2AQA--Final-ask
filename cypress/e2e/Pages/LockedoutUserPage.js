class LockedOutUser {

InputUsername() {
    cy.get('#user-name').type('locked_out_user')
}
InputPassword() {
    cy.get('#password').type('secret_sauce')
}

Login() {
    cy.get('#login-button').click()
}

ErrorMessageExisit() {
    cy.get('.error-button').should('exist')
}

ErrorContainsText() {
    cy.get('h3').should('include.text', 'Sorry, this user has been locked out.')

}

UserNotLogedIn(){
cy.url().should('include', 'www.saucedemo.com')
}
}
export default new LockedOutUser