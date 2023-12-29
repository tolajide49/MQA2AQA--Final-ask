
import loginPage from "../Pages/LoginPage";
import ScreenWidthPage from "../Pages/LoginwithScreenPage";

describe('Login with screen width less than 1060px', function () {
    it('should log in with screen width less than 1060px', function () {
      // Set the screen width to less than 1060px
      ScreenWidthPage.ScreenWidth();
  
      // Visit the Sauce Demo website
      loginPage.visit();
  
      // Wait for the #user-name element to be visible
      ScreenWidthPage.ElementVisible
  
      // Log in with valid credentials
      loginPage.setUsername();
      loginPage.setPassword();
      loginPage.clickLoginButton();
  
      // Verify that the user is logged in
      ScreenWidthPage.UserIsLoggedIn();
  
    });
  })