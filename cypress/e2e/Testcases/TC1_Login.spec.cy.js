import loginPage from '../Pages/LoginPage';


describe('user login', function(){

  it('login page' , function(){
    loginPage.visit();
    loginPage.setUsername();
    loginPage.setPassword();
    loginPage.clickLoginButton();
    loginPage.verifySuccessfulLogin();
    loginPage.openMenu();
    loginPage.clickLogoutLink();
  
  })
  })