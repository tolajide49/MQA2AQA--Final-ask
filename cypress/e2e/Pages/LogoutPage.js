class logoutpage {
    
    MenuVisibility() {
        cy.get('#react-burger-menu-btn', { force: true }).click();
    }
    
    // MenuBtnClick() {
    //     cy.get('.bm-menu').click(); 
    // }
       

    LogoutBnclick() {
        cy.get('#inventory_sidebar_link').click();
        cy.get('.bm-item menu-item').click();
    cy.get('#logout_sidebar_link').click();
    }
}
    
    export default new logoutpage;