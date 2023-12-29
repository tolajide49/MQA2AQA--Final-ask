import loginPage from "../Pages/LoginPage";
import LogoutPage from "../Pages/LogoutPage";

describe('Logout scenario', function () {
  it('should log in and then log out', function () {
    // Visit the Sauce Demo website
    loginPage.visit();

    // Log in with valid credentials
    loginPage.setUsername();
    loginPage.setPassword();
    loginPage.clickLoginButton();

    //Wait for the menu to become visible
    LogoutPage.MenuVisibility();

// Now, perform the logout action
LogoutPage.LogoutBnclick



  });
});
