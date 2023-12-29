import loginPage from '../Pages/LoginPage';
import InvalidLoginPage from '../Pages/InvalidLoginPage';

describe('user invalid_login', function() {
    it('Valid user cannot log in with invalid credentials and error message is displayed', () => {
      loginPage.visit();
      loginPage.setUsername();
      InvalidLoginPage.WrongPassword();
      loginPage.clickLoginButton();
      InvalidLoginPage.VerifyInvalid()
  });
  
})